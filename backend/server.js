// server.js (ESM)

import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import PDFDocument from "pdfkit";
import Joi from "joi";

config();

const { connect, connection, Schema, model } = mongoose;

// Path config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* -------------------- CORS -------------------- */
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* -------------------- MongoDB -------------------- */
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/momos";
connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

/* -------------------- Schemas -------------------- */
const menuItemSchema = new Schema({
  id: { type: String, default: uuidv4 },
  name: String,
  category: String,
  subcategory: String,
  variants: [Map],
  timestamp: { type: Date, default: Date.now },
});

const franchiseSchema = new Schema({
  id: { type: String, default: uuidv4 },
  full_name: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  investment_capacity: String,
  experience: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const feedbackSchema = new Schema({
  id: { type: String, default: uuidv4 },
  name: String,
  email: String,
  phone: String,
  rating: Number,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const MenuItem = model("MenuItem", menuItemSchema);
const Franchise = model("FranchiseInquiry", franchiseSchema);
const Feedback = model("Feedback", feedbackSchema);

/* -------------------- Router -------------------- */
import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => res.json({ message: "Momo's Adda API" }));

/* -------------------- Menu -------------------- */
router.get("/menu", async (req, res) => {
  try {
    const query = req.query.category ? { category: req.query.category } : {};
    const items = await MenuItem.find(query).select("-_id");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/menu", async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* -------------------- Franchise -------------------- */

// Rate limit
const franchiseLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many submissions. Try again later.",
});

// Validation
const franchiseValidation = Joi.object({
  full_name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  investment_capacity: Joi.string().required(),
  experience: Joi.string().required(),
  message: Joi.string().allow(""),
});

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/franchise", franchiseLimiter, async (req, res) => {
  try {
    const { error } = franchiseValidation.validate(req.body);
    if (error)
      return res.status(400).json({ success: false, message: error.details[0].message });

    const data = req.body;

    // Save to DB
    const inquiry = new Franchise(data);
    await inquiry.save();

    // Create PDF
    const pdfBuffer = await new Promise((resolve) => {
      const doc = new PDFDocument();
      const buffers = [];
      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => resolve(Buffer.concat(buffers)));

      doc.fontSize(18).text("Franchise Application", { align: "center" });
      doc.moveDown();
      Object.entries(data).forEach(([key, val]) =>
        doc.text(`${key.replace("_", " ")}: ${val || "N/A"}`)
      );
      doc.end();
    });

    // Send to franchise team
    await transporter.sendMail({
      from: `"Momos Adda Franchise" <${process.env.EMAIL_USER}>`,
      to: process.env.FRANCHISE_EMAIL,
      subject: "New Franchise Inquiry",
      html: `<p>New franchise inquiry received from <b>${data.full_name}</b></p>`,
      attachments: [{ filename: "franchise.pdf", content: pdfBuffer }],
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Momos Adda" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Franchise Application Received",
      html: `<p>Dear ${data.full_name},</p>
             <p>Thank you for your interest in Momos Adda franchise. Our team will contact you soon.</p>
             <p>Regards,<br/>Momos Adda Team</p>`,
    });

    res.status(201).json({ success: true, message: "Franchise inquiry submitted" });
  } catch (err) {
    console.error("Franchise Error:", err);
    res.status(500).json({ success: false, message: "Submission failed" });
  }
});

router.get("/franchise", async (_req, res) => {
  const list = await Franchise.find().select("-_id");
  res.json(list);
});

/* -------------------- Feedback (duplicate prevention + email) -------------------- */
router.post("/feedback", async (req, res) => {
  try {
    const { email, message } = req.body;

    // Check for duplicate feedback (same email + same message)
    const existing = await Feedback.findOne({ email, message });
    if (existing) {
      return res.status(409).json({ success: false, message: "Duplicate feedback detected" });
    }

    const feedback = new Feedback(req.body);
    await feedback.save();

    // Send feedback email to team
    await transporter.sendMail({
      from: `"Momos Adda Feedback" <${process.env.EMAIL_USER}>`,
      to: process.env.FEEDBACK_EMAIL, // set in .env
      subject: "New Feedback Received",
      html: `<p>New feedback received:</p>
             <p><b>Name:</b> ${feedback.name}</p>
             <p><b>Email:</b> ${feedback.email}</p>
             <p><b>Phone:</b> ${feedback.phone}</p>
             <p><b>Rating:</b> ${feedback.rating}</p>
             <p><b>Message:</b> ${feedback.message}</p>`,
    });

    res.status(201).json({ success: true, message: "Feedback received" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/feedback", async (_req, res) => {
  const data = await Feedback.find().select("-_id");
  res.json(data);
});

app.use("/api", router);

/* -------------------- Server -------------------- */
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("SIGINT", async () => {
  await connection.close();
  process.exit(0);
});

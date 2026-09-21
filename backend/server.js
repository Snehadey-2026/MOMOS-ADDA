// server.js (ESM)

import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
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
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* -------------------- MongoDB -------------------- */
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/momos";

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

router.get("/", (_req, res) =>
  res.json({ message: "Momo's Adda API" })
);

/* -------------------- Brevo Email Helper -------------------- */

/*
  Brevo sends transactional email through HTTPS API.
  This avoids SMTP ports, which are blocked on Render Free.
*/

async function sendEmail({
  to,
  subject,
  htmlContent,
  attachment,
  replyTo,
}) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: process.env.BREVO_SENDER_NAME || "Momos Adda",
        email: process.env.BREVO_SENDER_EMAIL,
      },

      to: [
        {
          email: to,
        },
      ],

      subject,
      htmlContent,

      ...(replyTo
        ? {
            replyTo: {
              email: replyTo,
            },
          }
        : {}),

      ...(attachment
        ? {
            attachment: [
              {
                content: attachment.content,
                name: attachment.name,
              },
            ],
          }
        : {}),
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Brevo API Error:", result);

    throw new Error(
      result?.message || "Brevo email sending failed"
    );
  }

  console.log("Brevo email sent:", result.messageId);

  return result;
}

/* -------------------- Menu -------------------- */

router.get("/menu", async (req, res) => {
  try {
    const query = req.query.category
      ? { category: req.query.category }
      : {};

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

router.post(
  "/franchise",
  franchiseLimiter,
  async (req, res) => {
    try {
      const { error } = franchiseValidation.validate(req.body);

      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message,
        });
      }

      const data = req.body;

      /* ---------- Save to MongoDB ---------- */

      const inquiry = new Franchise(data);

      await inquiry.save();

      /* ---------- Create PDF ---------- */

      const pdfBuffer = await new Promise((resolve) => {
        const doc = new PDFDocument();
        const buffers = [];

        doc.on("data", buffers.push.bind(buffers));

        doc.on("end", () => {
          resolve(Buffer.concat(buffers));
        });

        doc
          .fontSize(18)
          .text("Franchise Application", {
            align: "center",
          });

        doc.moveDown();

        Object.entries(data).forEach(([key, val]) => {
          doc.text(
            `${key.replace(/_/g, " ")}: ${val || "N/A"}`
          );
        });

        doc.end();
      });

      /* 
        Convert PDF Buffer to Base64.
        Brevo accepts base64 attachments.
      */

      const pdfBase64 = pdfBuffer.toString("base64");

      /* ---------- Email: Franchise Team ---------- */

      await sendEmail({
        to: process.env.FRANCHISE_EMAIL,

        subject: "New Franchise Inquiry",

        htmlContent: `
          <h2>New Franchise Inquiry</h2>

          <p>
            A new franchise inquiry has been received
            from <strong>${data.full_name}</strong>.
          </p>

          <p>
            Please find the complete franchise application
            attached as a PDF.
          </p>
        `,

        attachment: {
          content: pdfBase64,
          name: "franchise.pdf",
        },

        replyTo: data.email,
      });

      /* ---------- Auto Reply: Customer ---------- */

      await sendEmail({
        to: data.email,

        subject: "Franchise Application Received",

        htmlContent: `
          <p>Dear ${data.full_name},</p>

          <p>
            Thank you for your interest in
            <strong>Momos Adda</strong> franchise.
          </p>

          <p>
            We have successfully received your
            franchise application.
          </p>

          <p>
            Our team will review your enquiry and
            contact you soon.
          </p>

          <p>
            Regards,<br/>
            <strong>Momos Adda Team</strong>
          </p>
        `,
      });

      res.status(201).json({
        success: true,
        message: "Franchise inquiry submitted",
      });

    } catch (err) {
      console.error("Franchise Error:", err);

      res.status(500).json({
        success: false,
        message: "Submission failed",
      });
    }
  }
);

router.get("/franchise", async (_req, res) => {
  try {
    const list = await Franchise.find().select("-_id");

    res.json(list);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

/* -------------------- Feedback -------------------- */

router.post("/feedback", async (req, res) => {
  try {
    const { email, message } = req.body;

    /* ---------- Duplicate Prevention ---------- */

    const existing = await Feedback.findOne({
      email,
      message,
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Duplicate feedback detected",
      });
    }

    /* ---------- Save to MongoDB ---------- */

    const feedback = new Feedback(req.body);

    await feedback.save();

    /* ---------- Send Feedback Email ---------- */

    await sendEmail({
      to: process.env.FEEDBACK_EMAIL,

      subject: "New Feedback Received",

      htmlContent: `
        <h2>New Feedback Received</h2>

        <p>
          <strong>Name:</strong>
          ${feedback.name}
        </p>

        <p>
          <strong>Email:</strong>
          ${feedback.email}
        </p>

        <p>
          <strong>Phone:</strong>
          ${feedback.phone}
        </p>

        <p>
          <strong>Rating:</strong>
          ${feedback.rating}
        </p>

        <p>
          <strong>Message:</strong>
          ${feedback.message}
        </p>
      `,

      replyTo: feedback.email,
    });

    res.status(201).json({
      success: true,
      message: "Feedback received",
    });

  } catch (err) {
    console.error("Feedback Error:", err);

    res.status(400).json({
      error: err.message,
    });
  }
});

router.get("/feedback", async (_req, res) => {
  try {
    const data = await Feedback.find().select("-_id");

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

/* -------------------- API -------------------- */

app.use("/api", router);

/* -------------------- Server -------------------- */

const PORT = process.env.PORT || 3300;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

/* -------------------- Graceful Shutdown -------------------- */

process.on("SIGINT", async () => {
  await connection.close();
  process.exit(0);
});
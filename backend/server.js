// server.js (ESM)
import express from "express";
import { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const { connect, connection, Schema, model } = mongoose;

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Also respond to preflight explicitly (safe)
app.options("*", cors());

// Body parser
app.use(json());

// Serve static (images, assets) from public
app.use(express.static(path.join(__dirname, "public")));

// --- Mongoose connect ---
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/momos";
connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Schemas & Models ---


const menuItemSchema = new Schema({
  id: { type: String, default: uuidv4 },
  name: String,
  category: String,
  subcategory: String,
  variants: [Map],
  timestamp: { type: Date, default: Date.now },
});

const franchiseInquirySchema = new Schema({
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
const FranchiseInquiry = model("FranchiseInquiry", franchiseInquirySchema);
const Feedback = model("Feedback", feedbackSchema);

// --- Router ---
import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => res.json({ message: "Momo's Adda API" }));

// Menu
router.get("/menu", async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const menuItems = await MenuItem.find(query).select("-_id");
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/menu", async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Franchise
router.post("/franchise", async (req, res) => {
  try {
    const inquiry = new FranchiseInquiry(req.body);
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/franchise", async (_req, res) => {
  try {
    const inquiries = await FranchiseInquiry.find().select("-_id");
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Feedback
router.post("/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/feedback", async (_req, res) => {
  try {
    const feedbacks = await Feedback.find().select("-_id");
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mount router under /api (recommended)
app.use("/api", router);

// Generic error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Something went wrong" });
});

// Start server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await connection.close();
  process.exit(0);
});

import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./lib/db.js";
import job from "./lib/cron.js";
const app = express();
const PORT = process.env.PORT || 3010;
job.start();
// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/books",bookRoutes);

// Connect DB and then start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
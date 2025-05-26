import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./lib/db.js";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3010;

// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/books",bookRoutes);

// Connect DB and then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
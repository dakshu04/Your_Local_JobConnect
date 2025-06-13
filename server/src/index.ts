import { connectDB } from "./config/db";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes"; // import the whole router

dotenv.config(); // ✅ Load env variables from .env

connectDB(); // ✅ Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Use uppercase PORT

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON from requests

// Test route
app.get("/api/test", (req, res) => {
  res.send("API Working");
});

// User-related routes
app.use("/api", userRoutes); // Mount all /users routes under /api

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

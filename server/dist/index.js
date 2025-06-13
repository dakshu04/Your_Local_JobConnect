"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes")); // import the whole router
dotenv_1.default.config(); // ✅ Load env variables from .env
(0, db_1.connectDB)(); // ✅ Connect to MongoDB
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000; // ✅ Use uppercase PORT
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // to parse JSON from requests
// Test route
app.get("/api/test", (req, res) => {
    res.send("API Working");
});
// User-related routes
app.use("/api", user_routes_1.default); // Mount all /users routes under /api
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

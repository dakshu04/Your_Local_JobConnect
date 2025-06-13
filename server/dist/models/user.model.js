"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define what a user looks like
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
    },
    skills: [String], // e.g. ["plumbing", "carpentry"]
}, {
    timestamps: true // adds createdAt and updatedAt fields
});
// Export the model to use it elsewhere
exports.User = mongoose_1.default.model("User", userSchema);

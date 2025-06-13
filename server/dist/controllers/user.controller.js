"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
// ✅ Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, skills } = req.body;
        const newUser = yield user_model_1.User.create({ name, email, phone, skills });
        res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error,
        });
    }
});
exports.createUser = createUser;
// ✅ Get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch users",
            error,
        });
    }
});
exports.getAllUsers = getAllUsers;
// ✅ Get a user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getUserById = getUserById;
// ✅ Update a user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedUser = yield user_model_1.User.findByIdAndUpdate(id, updates, {
            new: true,
        });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User updated",
            user: updatedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update user",
            error,
        });
    }
});
exports.updateUser = updateUser;
// ✅ Delete a user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield user_model_1.User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json({
            message: "User deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete user",
            error,
        });
    }
});
exports.deleteUser = deleteUser;

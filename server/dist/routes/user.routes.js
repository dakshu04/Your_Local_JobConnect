"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
// CREATE
router.post("/users", user_controller_1.createUser);
// READ
router.get("/users", user_controller_1.getAllUsers);
router.get("/users/:id", user_controller_1.getUserById);
// UPDATE
router.put("/users/:id", user_controller_1.updateUser);
// DELETE
router.delete("/users/:id", user_controller_1.deleteUser);
exports.default = router;

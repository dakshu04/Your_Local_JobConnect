import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

const router = express.Router();

// CREATE
router.post("/users", createUser);

// READ
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

// UPDATE
router.put("/users/:id", updateUser);

// DELETE
router.delete("/users/:id", deleteUser);

export default router;

import { Request, Response } from "express"
import { User } from "../models/user.model"

export const createUser = async (req: Request, res: Response) => {
    try {
        // Extract data from the request body
        const { name, email, phone, skills } = req.body;

        // create a new user in mongoDB
        const newUser = await User.create({ name, email, phone, skills })

        // send back success response
        res.status(201).json({
            message: "User created successfully",
            user: newUser
        })
    } catch (error) {
        res.status(500).json({
            message:"Error creating user", error
        })
    }
}

// Get all the users
export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find(); //fetch all users
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch users", error
        })
    }
}

// Get One User by Id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Failed to fetch user", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};


// Delete User
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleteUser = await User.findByIdAndDelete(id)
        if(!deleteUser) {
            return  res.status(404).json({
                        message: "User not found"
                    })
        }
        res.status(200).json({
            message: "User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user", error });
    }
}
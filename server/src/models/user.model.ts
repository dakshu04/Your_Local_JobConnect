import mongoose from "mongoose";

// Define what a user looks like
const userSchema = new mongoose.Schema({
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

    skills: [String],  // e.g. ["plumbing", "carpentry"]
    },

    {
        timestamps: true // adds createdAt and updatedAt fields
    }
)

// Export the model to use it elsewhere
export const User = mongoose.model("User", userSchema)
"use client"; // 👈 Important in Next.js 13+ App Router when using interactivity like forms

import React, { useState } from "react";
import { createUser } from "../lib/api";
import { User } from "../types";
import { useRouter } from "next/navigation"

const initialState: Omit<User, "_id"> = {
  name: "",
  email: "",
  phone: "",
  skills: "",
};

const UserForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUser(formData); // ✅ call backend API
      alert("User created successfully!");
      setFormData(initialState); // ✅ clear form after submit
      router.push("/user-list")
    } catch (error) {
      console.error("Error creating user", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border text-black bg-gray-200 rounded shadow">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills"
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;

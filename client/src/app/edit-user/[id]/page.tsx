"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchUserById, updateUser } from "@/lib/api";
import { User } from "@/types";

const EditUserPage = () => {
  const params = useParams()
  const id = params?.id as string // ✅ Get user ID from URL
  const router = useRouter();

  const [formData, setFormData] = useState<Omit<User, "_id">>({
    name: "",
    email: "",
    phone: "",
    skills: "",
  });
  const [loading, setLoading] = useState(true);

  // ✅ Load the user's data when page mounts
  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserById(id as string);
        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          skills: data.skills,
        });
      } catch (error) {
        console.error("Error fetching user", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  // ✅ Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit updated data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(id as string, formData);
      alert("User updated successfully!");
      router.push("/user-list");
    } catch (error) {
      console.error("Error updating user", error);
      alert("Something went wrong!");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 p-6 rounded shadow text-black"
    >
      <h2 className="text-xl font-bold">Edit User</h2>
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
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default EditUserPage;

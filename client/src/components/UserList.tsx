"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchUsers, deleteUser } from "@/lib/api";
import { User } from "@/types";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error("Failed to load users", err);
        alert("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Failed to delete user", err);
      alert("Failed to delete user");
    }
  };

  if (loading) return <p className="text-center">Loading users...</p>;

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold mb-6">User List</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            className="p-4 border rounded shadow hover:bg-gray-50 transition"
          >
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Skills:</strong> {user.skills}</p>

            <div className="flex gap-4 mt-4">
              <Link href={`/edit-user/${user._id}`}>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(user._id!)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;

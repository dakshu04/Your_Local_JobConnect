import axios from "./axios";
import { User } from "../types";
// Replace localhost with your Render backend URL
const BASE_URL = "https://your-local-jobconnect.onrender.com";
export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get("/users");
  return res.data;
};

export const createUser = async (user: User) => {
  const res = await axios.post("/users", user);
  return res.data;
};

export const fetchUserById = async (id: string) => {
  const res = await axios.get(`/users/${id}`);
  return res.data;
};


export async function updateUser(id: string, data: Partial<User>) {
  const res = await fetch(`/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update user");
  return res.json();
}

export const deleteUser = async (id: string) => {
  const res = await fetch(`/api/users/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete user");
  }

  return await res.json();
};
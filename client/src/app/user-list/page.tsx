import React from "react";
import UserList from "@/components/UserList";

const UserListPage = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">All Users</h1>
      <UserList />
    </main>
  );
};

export default UserListPage;

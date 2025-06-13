"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 sticky top-0 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Your Local Job Connect</h1>
      <div className="space-x-4">
        <Link
          href="/"
          className={`hover:underline ${pathname === "/" ? "text-yellow-300" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/user-list"
          className={`hover:underline ${pathname === "/user-list" ? "text-yellow-300" : ""}`}
        >
          Users
        </Link>
        <Link
          href="/create-user"
          className={`hover:underline ${pathname === "/create-user" ? "text-yellow-300" : ""}`}
        >
          Create User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold text-white">Your Local Job Connect</h1>
      <div className="space-x-6">
        <Link
          href="/"
          className={`hover:underline transition ${
            pathname === "/" ? "text-yellow-400 font-semibold" : "text-gray-300"
          }`}
        >
          Home
        </Link>
        <Link
          href="/user-list"
          className={`hover:underline transition ${
            pathname === "/user-list" ? "text-yellow-400 font-semibold" : "text-gray-300"
          }`}
        >
          Users
        </Link>
        <Link
          href="/create-user"
          className={`hover:underline transition ${
            pathname === "/create-user" ? "text-yellow-400 font-semibold" : "text-gray-300"
          }`}
        >
          Create User
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full blur-3xl opacity-30 top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute w-[200px] h-[200px] bg-blue-500 rounded-full blur-2xl opacity-20 top-1/4 right-1/4 z-0" />

      {/* Content */}
      <motion.div
        className="z-10 text-center space-y-6 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Welcome to Local JobConnect 🚀
        </h1>

        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Your local job marketplace. Instantly connect with opportunities around you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl shadow-md">
            Explore Jobs
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-xl">
            Post a Job
          </Button>
        </div>
      </motion.div>
    </main>
  )
}

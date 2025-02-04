"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react" // Added import for React

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            ReWire
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
          </nav>
          <button className="md:hidden text-white text-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black py-4"
          >
            <nav className="flex flex-col items-center space-y-4">
              <NavLink href="#features" onClick={() => setIsMenuOpen(false)}>
                Features
              </NavLink>
              <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}


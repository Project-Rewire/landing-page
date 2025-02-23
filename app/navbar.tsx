"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-green-300/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold">
          <Image
            src="rewire-icon.png"
            alt="Rewire Logo"
            width={24}
            height={24}
            className="object-contain"
            priority
          />
          <span>Rewire</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium hover:text-green-700 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-green-700 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-green-700 transition-colors" href="#about-us">
            About Us
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed md:hidden top-14 left-0 w-full bg-white text-black shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="p-4 flex flex-col items-center space-y-4">
          <Link
            className="text-sm font-medium hover:text-green-700 transition-colors"
            href="#features"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-green-700 transition-colors"
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:text-green-700 transition-colors"
            href="#about-us"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
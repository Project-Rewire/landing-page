import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex items-center justify-center sticky top-0 z-50 w-full border-b bg-green-300/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center justify-center gap-2 font-semibold">
          <Image
            src="rewire-icon.png"
            alt="Rewire Logo"
            width={24}
            height={24}
            className="object-contain"
            priority
            style={{ margin: 8 }}
          />
          <span>Rewire</span>
        </div>
        <nav className="ml-auto flex items-center gap-16">
          <Link className="text-sm font-medium" href="#features">Features</Link>
          <Link className="text-sm font-medium" href="#how-it-works">How It Works</Link>
          <Link className="text-sm font-medium" href="#about-us">About Us</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaGooglePlay } from "react-icons/fa"

import "./animations.css"

export default function Hero() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme

  if (!mounted) {
    return (
      <div className="h-screen w-screen bg-white dark:bg-black"></div>
    )
  }

  return (
    <div
      className="relative flex items-center justify-center h-screen w-full bg-center bg-no-repeat px-6 md:px-12 transition-colors duration-300"
      style={{
        backgroundImage: currentTheme === "dark"
          ? "url('/backgrounds/neon-butterflies-dark.jpg')"
          : "url('/backgrounds/neon-butterflies-light.jpg')",
        backgroundColor: currentTheme === "dark" ? "#000" : "#fff",
      }}
    >
      {/* Dark Overlay (No Blur) */}
      <div className={`absolute inset-0 ${currentTheme === "dark" ? "bg-black/50" : "bg-white/50"}`}></div>

      <section className="relative flex flex-col md:flex-row items-center max-w-5xl w-full gap-8 z-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className={`text-3xl sm:text-5xl font-bold tracking-tight leading-tight ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            Rewire Your Life
          </h1>
          <p className={`text-base sm:text-lg max-w-md mx-auto md:mx-0 ${currentTheme === "dark" ? "text-white" : "text-gray-700"}`}>
            Overcome addictions with AI-powered support, a structured approach, and a supportive community.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3 sm:gap-4">
            <Link href="#how-it-works" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className={`w-full sm:w-auto transition-colors ${
                  currentTheme === "dark"
                    ? "bg-black/30 hover:bg-white/20 text-white"
                    : "bg-white/10 hover:bg-black/5 border-gray-900 text-gray-900"
                }`}
              >
                Learn More
              </Button>
            </Link>
            <Link href="#how-it-works" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className={`w-full sm:w-auto transition-colors ${
                  currentTheme === "dark"
                    ? "bg-black/30 hover:bg-white/20 text-white"
                    : "bg-white/10 hover:bg-black/5 border-gray-900 text-gray-900"
                }`}
              >
                <FaGooglePlay className="mr-2" /> Available Soon
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content (Mockup Image) */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative border border-spacing-1 rounded-[25px]">
            <div className={`absolute inset-0 rounded-[40px] ${currentTheme === "dark" ? "bg-white/10" : "bg-black/5"}`}></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[280px]">
              <div className={`absolute inset-0 z-10 ${currentTheme === "dark" ? "bg-gradient-to-r from-fuchsia-900/10 from-40% to-green-900/5" : "bg-white/10"}`}></div>
              <Image
                src={currentTheme === "dark" ? "/screens/get-started-dark.jpg" : "/screens/get-started-light.jpg"}
                alt="app"
                width={280}
                height={560}
                className={`w-full h-auto relative z-0 ${currentTheme === "dark" && `opacity-50`} rewire-fade-in`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

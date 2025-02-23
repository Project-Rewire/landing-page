"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent SSR mismatch by showing nothing until the theme is available
  if (!mounted) return <div className="h-screen w-screen bg-white dark:bg-black"></div>

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12 transition-colors duration-300"
      style={{
        backgroundImage: theme === "dark" ? "url('/backgrounds/neon-butterflies-dark.jpg')" : "url('/backgrounds/neon-butterflies-light.jpg')",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    >
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/60" : "bg-white/60"}`}></div>

      <section className="relative flex flex-col md:flex-row items-center max-w-5xl w-full gap-8 z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className={`text-3xl sm:text-5xl font-bold tracking-tight leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Rewire Your Life
          </h1>
          <p className={`text-base sm:text-lg max-w-md mx-auto md:mx-0 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
            Overcome addictions with AI-powered support, a structured approach, and a supportive community.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className={`transition-colors px-6 py-3 text-lg ${
                  theme === "dark"
                    ? "bg-transparent border-white hover:bg-white/20 text-white"
                    : "bg-transparent border-gray-900 hover:bg-gray-900/10 text-gray-900"
                }`}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative">
            <div className={`absolute inset-0 backdrop-blur-xl rounded-[40px] ${theme === "dark" ? "bg-white/10" : "bg-black/5"}`}></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[280px]">
              <div className={`absolute inset-0 z-10 ${theme === "dark" ? "bg-white/20" : "bg-white/10"}`}></div>
              <Image src="/screens/get-start.png" alt="app" width={280} height={560} className="w-full h-auto relative z-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

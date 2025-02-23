"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Hero() {
  const { theme } = useTheme()

  return (
    <div
      className=" h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12 transition-colors duration-300"
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neon-butterflies.jpg-scdLL3banBav2fZ1yisSE9F411ey6R.jpeg')"
            : "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neon-butterflies-light.jpg-AUkGCxGTDijxeQWL6ijSkPPUK9vcnl.jpeg')",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    >
      {/* Overlay - darker for dark mode, lighter for light mode */}
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black/60" : "bg-white/60"}`}></div>

      <section className="relative flex flex-col md:flex-row items-center max-w-5xl w-full gap-8 z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1
            className={`text-3xl sm:text-5xl font-bold tracking-tight leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Rewire Your Life
          </h1>
          <p
            className={`text-base sm:text-lg max-w-md mx-auto md:mx-0 ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
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
            {/* Blur effect background - adjusted for theme */}
            {/* <div
              className={`absolute inset-0 backdrop-blur-xl rounded-[40px] ${
                theme === "dark" ? "bg-white/10" : "bg-black/5"
              }`}
            ></div> */}

            <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[280px]">
              {/* Semi-transparent overlay - adjusted for theme */}
              <div className={`absolute inset-0 z-10 ${theme === "dark" ? "bg-black/20" : "bg-black/10"}`}></div>
              <Image
                src="/screens/get-start.png"
                alt="app"
                width={280}
                height={560}
                className="w-full h-auto relative z-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


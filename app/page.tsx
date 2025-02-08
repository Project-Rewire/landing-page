"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Users, Shield, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeProvider } from "next-themes"
import { GetItOnPlayStoreButton } from "@/components/playstore-button"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <header className="px-4 md:px-6 h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 relative">
          <Link className="flex items-center" href="#">
            <Image
              src="rewire-icon.png"
              alt="Rewire Logo"
              width={24}
              height={24}
              className="object-contain"
              priority
              style={{ margin: 8 }}
            />
            <span className="font-bold text-lg">Rewire</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#user-comments">
              User Comments
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 md:hidden">
              <nav className="flex flex-col p-4 space-y-4">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                  Features
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
                  How It Works
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#user-comments">
                  User Comments
                </Link>
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          )}
        </header>

        <main className="flex-1">
          <section className="p-4 md:p-8 mx-auto max-w-[1500px]">
            <div className="bg-gradient-to-br from-purple-900 via-transparent to-pink-900 py-16 md:py-32 rounded-xl">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 px-4">
                    Rewire Your Life
                  </h1>
                  <p className="max-w-2xl text-base md:text-xl mb-8 px-4">
                    Overcome addictions with AI-powered support, a structured approach, and a supportive community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#download">
                      <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                        Download Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full sm:w-auto border-white dark:text-white hover:bg-white/10">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-16 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    icon: BrainCircuit,
                    title: "Rebot - AI Assistant",
                    description: "Personalized support and guidance from our AI-driven chatbot."
                  },
                  {
                    icon: Users,
                    title: "Community Platform",
                    description: "Connect with others on similar journeys for mutual support and encouragement."
                  },
                  {
                    icon: Shield,
                    title: "URGE Shield",
                    description: "AI-powered support system to help you overcome urges and cravings."
                  }
                ].map((feature, index) => (
                  <Card key={index} className="dark:bg-gray-800/50">
                    <CardContent className="flex flex-col items-center p-4 md:p-6">
                      <feature.icon className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />
                      <h3 className="text-lg md:text-xl font-bold text-center mb-2">{feature.title}</h3>
                      <p className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: 1,
                    title: "Assessment",
                    description: "Complete AI-driven questionnaires to assess your addiction levels and type."
                  },
                  {
                    step: 2,
                    title: "Personalized Plan",
                    description: "Receive a tailored, step-by-step approach to overcome your specific addiction."
                  },
                  {
                    step: 3,
                    title: "Ongoing Support",
                    description: "Get continuous assistance from Rebot and the community as you progress."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 text-base md:text-lg font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="user-comments" className="py-16 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {[
                  {
                    comment: "Rewire has been a game-changer for me. The AI support and community have helped me stay on track with my recovery.",
                    author: "Sarah M."
                  },
                  {
                    comment: "I've tried many apps, but Rewire's structured approach and URGE Shield feature have made all the difference.",
                    author: "John D."
                  }
                ].map((testimonial, index) => (
                  <Card key={index} className="dark:bg-gray-800/50">
                    <CardContent className="p-4 md:p-6">
                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-4">"{testimonial.comment}"</p>
                      <p className="font-bold text-sm md:text-base">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="download" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Rewire Your Life?</h2>
                <p className="max-w-2xl text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8">
                  Start your journey to recovery today with Rewire's AI-powered support and community.
                </p>
                <GetItOnPlayStoreButton disabled={false} />
              </div>
            </div>
          </section>
        </main>

        <footer className="py-6 px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
              © 2025 Rewire. All rights reserved.
            </p>
            <nav className="flex gap-4 md:gap-6">
              <Link className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs md:text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
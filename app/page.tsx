"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Users, Shield } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeProvider } from "next-themes"
import { GetItOnPlayStoreButton } from "@/components/playstore-button"

export default function LandingPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <header className="px-6 h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <Link className="flex items-center" href="#">
            <BrainCircuit className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg">Rewire</span>
          </Link>
          <nav className="flex items-center space-x-6">
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
        </header>

        <main className="flex-1">
          <section className="py-32 bg-gradient-to-br from-purple-900 via-transparent to-pink-900 rounded-xl m-8">
            <div className="container px-6 mx-auto">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Rewire Your Life
                </h1>
                <p className="max-w-2xl text-lg md:text-xl mb-8">
                  Overcome addictions with AI-powered support, a structured approach, and a supportive community.
                </p>
                <div className="flex gap-4">
                  <Link href="#download">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      Download Now
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-white dark:text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-24">
            <div className="container px-6 mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <CardContent className="flex flex-col items-center p-6">
                      <feature.icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
                      <p className="text-center text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container px-6 mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
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
                    <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="user-comments" className="py-24">
            <div className="container px-6 mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <CardContent className="p-6">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">"{testimonial.comment}"</p>
                      <p className="font-bold">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="download" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container px-6 mx-auto">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rewire Your Life?</h2>
                <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400 mb-8">
                  Start your journey to recovery today with Rewire's AI-powered support and community.
                </p>
                <GetItOnPlayStoreButton disabled={false} />
              </div>
            </div>
          </section>
        </main>

        <footer className="py-6 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
              © 2025 Rewire. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
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
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <BrainCircuit className="h-6 w-6 mr-2" />
            <span className="font-bold">Rewire</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <div className="flex items-center space-x-4">
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
            </div>
          </nav>
        </header>
        <main className="m-auto">
          <section className="rounded-lg mt-24 w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-900 via-black to-pink-900">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Rewire Your Life, One Step at a Time
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                    Overcome addictions with AI-powered support, a structured approach, and a supportive community.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="#download">
                    <Button className="bg-white text-black hover:bg-gray-200" >
                      Download Now
                    </Button>
                  </Link>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="dark:bg-gray-800">
                  <CardContent className="flex flex-col items-center p-6">
                    <BrainCircuit className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-center mb-2">Rebot - AI Assistant</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Personalized support and guidance from our AI-driven chatbot.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="flex flex-col items-center p-6">
                    <Users className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-center mb-2">Community Platform</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Connect with others on similar journeys for mutual support and encouragement.
                    </p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="flex flex-col items-center p-6">
                    <Shield className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-center mb-2">URGE Shield</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      AI-powered support system to help you overcome urges and cravings.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-950">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Assessment</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Complete AI-driven questionnaires to assess your addiction levels and type.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Personalized Plan</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Receive a tailored, step-by-step approach to overcome your specific addiction.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Ongoing Support</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Get continuous assistance from Rebot and the community as you progress.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="user-comments" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      "Rewire has been a game-changer for me. The AI support and community have helped me stay on track
                      with my recovery."
                    </p>
                    <p className="font-bold">- Sarah M.</p>
                  </CardContent>
                </Card>
                <Card className="dark:bg-gray-800">
                  <CardContent className="p-6">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      "I've tried many apps, but Rewire's structured approach and URGE Shield feature have made all the
                      difference."
                    </p>
                    <p className="font-bold">- John D.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="download" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Rewire Your Life?</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Start your journey to recovery today with Rewire's AI-powered support and community.
                  </p>
                </div>
                <div className="space-x-4">
                  <GetItOnPlayStoreButton disabled={false} />
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Rewire. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </ThemeProvider>
  )
}


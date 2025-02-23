import { Shield, Users2, Bot, Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-950 to-green-600 h-screen">
        <section className="relative">
          <div className="absolute inset-0" />
          <div className="container relative z-10 py-24 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">Rewire Your Life</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Overcome addictions with AI-powered support, a structured approach, and a supportive community.
            </p>
            <div className="flex justify-center gap-4">
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="bg-transparent border-white">
                Learn More
              </Button>
            </Link>
            </div>
          </div>
        </section>
      </div>
      <main className="flex items-center flex-col mx-16">
        <section id="how-it-works" className="py-16 md:py-24">
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
        <section id="features" className="container py-24">
            <h2 id="features" className="mb-16 text-center text-3xl font-bold tracking-tight">Key Features</h2>
            <div className="grid gap-16">
              {[
                {
                  icon: Bot,
                  title: "Rebot - AI Assistant",
                  description:
                    "Experience personalized support and guidance from our AI-driven chatbot. Available 24/7, Rebot understands your journey and provides tailored advice when you need it most.",
                  image:
                    "/screens/ai_assistant.png",
                  imageAlt: "Rewire AI assistant chat interface",
                },
                {
                  icon: Shield,
                  title: "URGE Shield",
                  description:
                    "When cravings hit, URGE Shield is your first line of defense. Access immediate support, coping strategies, and connect with help instantly to stay on track with your recovery journey.",
                  image:
                    "/screens/urge_shield.png",
                  imageAlt: "Rewire URGE shield interface",
                  reverse: true,
                },
                {
                  icon: Users2,
                  title: "Community Platform",
                  description:
                    "You're never alone on this journey. Join specialized communities based on your specific challenges, connect with others who understand your path, and build a supportive network that strengthens your recovery journey.",
                  image:
                    "/screens/communities.png",
                  imageAlt: "Rewire communities interface showing different addiction support groups",
                },
              ].map((feature, index) => (
                <div key={index} className="grid items-center gap-8 lg:grid-cols-2">
                  <div
                    className={`flex flex-col items-center text-center lg:items-start lg:text-left ${feature.reverse ? "lg:order-2" : ""
                      }`}
                  >
                    <div className="mb-4 rounded-lg bg-primary/10 p-4 lg:mb-6">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <div
                    className={`relative mx-auto w-full max-w-[280px] ${feature.reverse ? "lg:order-1" : "lg:ml-auto"}`}
                  >
                    <div className="overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.imageAlt}
                        width={280}
                        height={560}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>
        <section className="">
          <div className="container py-24">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">About Us</h2>
              <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
                Meet the dedicated team behind Rewire, committed to creating innovative solutions for addiction recovery
                and mental wellness.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Shakeel Gadhafi", role: "Team Leader" },
                { name: "Isuru Karunaratna", role: "Team Member" },
                { name: "Yasith Goonawardana", role: "Team Member" },
                { name: "Nidarsa Ragunathan", role: "Team Member" },
                { name: "Harshana Malshan", role: "Team Member" },
                { name: "Randul Arampola", role: "Team Member" },
              ].map((p) => (
                <div key={p.name} className="rounded-lg border bg-card p-8 text-center shadow-sm">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="border-t">
          <div className="container py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 id="about-us" className="mb-6 text-lg font-semibold">About Us</h3>
                <p className="text-muted-foreground">
                  We are computer science undergraduates at IIT Sri Lanka and this is
                  our Software Development Group Project
                </p>
              </div>
              <div>
                <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:mohamad.20230343@iit.ac.lk"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    mohamad.20230343@iit.ac.lk
                  </a>
                  <a
                    href="mailto:isuru.20232458@iit.ac.lk"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    isuru.20232458@iit.ac.lk
                  </a>
                  <a
                    href="https://github.com/Project-Rewire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    Project-Rewire
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 Rewire. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  )
}


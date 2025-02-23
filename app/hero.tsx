import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
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
  );
}
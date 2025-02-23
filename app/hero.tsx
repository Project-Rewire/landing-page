import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/neon-butterflies.jpg-scdLL3banBav2fZ1yisSE9F411ey6R.jpeg')",
        backgroundColor: "#000", // Fallback color
      }}
    >
      {/* Dark overlay with slightly more opacity to ensure text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <section className="relative flex flex-col md:flex-row items-center text-white max-w-5xl w-full gap-8 z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">Rewire Your Life</h1>
          <p className="text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Overcome addictions with AI-powered support, a structured approach, and a supportive community.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white/20 text-white transition-colors px-6 py-3 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[280px] backdrop-blur-sm bg-black/30">
            <Image src="/screens/get-start.png" alt="app" width={280} height={560} className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  )
}


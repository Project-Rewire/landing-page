import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 to-green-600 ">
      <section className="relative flex text-white">
        
        <div className="absolute inset-0" />
          <div className="container relative z-10 py-24 text-left ">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">Rewire Your Life</h1>
            <div className="py-8 max-w-2xl text-lg">
              Overcome addictions with AI-powered support, a structured approach, and a supportive community.
            </div>
            <div className="flex justify-start gap-4">
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="bg-transparent border-white">
                  Learn More
                </Button>
              </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/screens/get-start.png"
            alt={"app"}
            width={280}
            height={560}
            
          />
        </div>
      </section>
    </div>
  );
}
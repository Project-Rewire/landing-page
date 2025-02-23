import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-950 to-green-600 px-6 md:px-12">
      <section className="relative flex flex-col md:flex-row items-center text-white max-w-5xl w-full gap-8">
        
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">Rewire Your Life</h1>
          <p className="text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Overcome addictions with AI-powered support, a structured approach, and a supportive community.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="bg-transparent border-white px-6 py-3 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[260px] md:max-w-[280px]">
            <Image
              src="/screens/get-start.png"
              alt="app"
              width={280}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

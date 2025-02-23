import { ThemeProvider } from "@/components/theme-provider"

import Navbar from "./navbar"
import Hero from "./hero"
import HowItWorks from "./how-it-works"
import Features from "./features"
import AboutUs from "./about-us"
import Footer from "./footer"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <Hero />
      <main className="flex items-center flex-col mx-16">
        <HowItWorks />
        <Features />
        <AboutUs />
        <Footer />
      </main>
    </ThemeProvider>
  )
}


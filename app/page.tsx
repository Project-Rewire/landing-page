import { ThemeProvider } from "@/components/theme-provider"

import HowItWorks  from  "./how-it-works"
import Features  from   "./features"
import AboutUs  from   "./about-us"
import Pricing  from  "./pricing"
import Footer  from  "./footer"
import Privacy from "./privacy"
import Navbar from "./navbar"
import Hero from  "./hero"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar/>
      <Hero />
      <main className="flex items-center flex-col mx-16">
        <HowItWorks />
        <Features  />
        <Privacy  />
        <Pricing />
        <AboutUs/>
        <Footer/>
      </main>
    </ThemeProvider>
  )
}

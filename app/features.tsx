import { Shield, Users2, Bot } from "lucide-react"
import Image from "next/image";

export default function Features() {
  return (
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
                  width={200}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
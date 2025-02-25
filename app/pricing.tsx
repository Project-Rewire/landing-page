import { PricingCard } from "../components/pricing-card"

const plans = [
  {
    name: "Starter",
    price: 5,
    period: "month",
    features: [
      "Access to daily recovery tasks",
      "AI-driven addiction assessment",
      "Community forum access",
      "Basic progress tracking",
      "Cancel anytime",
    ],
  },
  {
    name: "Pro",
    price: 10,
    period: "quarter",
    featured: true,
    features: [
      "Personalized recovery plan",
      "AI chatbot for emotional support",
      "Task reminders & notifications",
      "Peer support matching",
      "Everything in Basic Plan",
    ],
  },
  {
    name: "Premium",
    price: 20,
    period: "year",
    features: [
      "Unlimited AI chatbot access",
      "Advanced progress tracking & insights",
      "Therapist booking system",
      "Customizable recovery milestones",
      "AI-powered relapse prevention recommendations",
      "Everything in Advanced Plan",
    ],
  },
]

export default function PricingPage() {
  return (
    <div id="pricing" className="bg-transparent text-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Smart Pricing for a Smarter Recovery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Choose a plan that gives you the flexibility and features you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}


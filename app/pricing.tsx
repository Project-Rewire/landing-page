import { PricingCard } from "../components/pricing-card"

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: { value: 0, unit: "$" },
    period: "life time",
    features: [
      { name: "AI Assistant", isAvailable: true },
      { name: "Community Access", isAvailable: true },
      { name: "Personalized Task Recommendation", isAvailable: true },
      { name: "Chat History Cloud Storage", isAvailable: false },
      { name: "Advance AI Models", isAvailable: false },
      { name: "Therapist Support", isAvailable: false },
    ],
    isComingSoon: false
  },
  {
    name: "Premium",
    price: undefined,
    period: undefined,
    features: [
      { name: "AI Assistant", isAvailable: true },
      { name: "Community Access", isAvailable: true },
      { name: "Personalized Task Recommendation", isAvailable: true },
      { name: "Chat History Cloud Storage", isAvailable: true },
      { name: "Advance AI Models", isAvailable: true },
      { name: "Therapist Support", isAvailable: false },
    ],
    isComingSoon: true
  },
  {
    name: "Elite",
    price: undefined,
    period: undefined,
    features: [
      { name: "AI Assistant", isAvailable: true },
      { name: "Community Access", isAvailable: true },
      { name: "Personalized Task Recommendation", isAvailable: true },
      { name: "Chat History Cloud Storage", isAvailable: true },
      { name: "Advance AI Models", isAvailable: true },
      { name: "Therapist Support", isAvailable: true },
    ],
    isComingSoon: true
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-transparent text-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Smart Pricing for a Smarter Recovery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a plan that gives you the flexibility and features you need.
          </p>
        </div>
        <div className={`grid md:grid-cols-${plans.length % 3 === 0 ? '3' : '2'} gap-8`}>
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}


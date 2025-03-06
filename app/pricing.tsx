import { PricingCard } from "../components/pricing-card"
import { plans } from "./pricing-plan"

export default function Pricing() {
  return (
    <div id="pricing" className="bg-transparent text-white py-20 ">
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

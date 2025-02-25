"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Cross, X } from "lucide-react"
import { PaymentModal } from "./payment-modal"
import { PricingPlan, PricingPlanFeature } from "@/app/pricing-plan"

export function PricingCard(plan: PricingPlan) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  return (
    <>
      <div className={`relative p-6 bg-transparent border rounded-2xl shadow-lg transition-all ${plan.isComingSoon ? "opacity-60" : ""}`}>
        {plan.isComingSoon && (
          <div className="absolute top-2 right-4 bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-xs font-semibold">
            Coming Soon
          </div>
        )}
        <div className="space-y-6">
          {/* Plan Name & Price */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
            <div className="mt-2 flex items-end">
              <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-1">
                {plan.price ? (
                  <>
                    {plan.price.unit}{plan.price.value}
                    <span className="ml-1 text-sm font-medium text-gray-500 dark:text-zinc-400 flex flex-row items-center gap-2">
                      <span>/</span>
                      <span>{plan.period}</span>
                    </span>
                  </>
                ) : (
                  '--'
                )}
              </span>
            </div>
          </div>

          {/* Get Button */}
          <Button
            className="w-full bg-black hover:bg-neutral-900 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black font-semibold py-2 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setShowPaymentModal(true)}
            disabled={plan.isComingSoon}
          >
            Get {plan.name}
          </Button>

          {/* Features List */}
          <ul className="space-y-3">
            {plan.features.map((feature: PricingPlanFeature, index: number) => (
              <li key={index} className="flex items-center gap-2">
                {feature.isAvailable ? <Check className="h-5 w-5 text-black dark:text-white" />
                  : <X className="h-5 w-5 text-black dark:text-white" />}
                <span className="text-sm text-gray-700 dark:text-zinc-300">
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Payment Modal */}
      {!plan.isComingSoon && plan.price !== undefined && plan.period !== undefined && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          plan={{ name: plan.name, price: plan.price, period: plan.period }}
        />
      )}
    </>
  )
}

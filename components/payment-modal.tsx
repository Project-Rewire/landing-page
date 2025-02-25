"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface PaymentMethod {
  id: string
  name: string
  logo: string
  description: string
}

interface PaymentModalProps {
  plan: {
    name: string
    price: PricingPlanPrice
    period: string
  }
  onClose: () => void
  isOpen: boolean
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "paypal",
    name: "PayPal",
    logo: "/placeholder.svg?height=40&width=120",
    description: "Pay with your PayPal account",
  },
  {
    id: "mollie",
    name: "Mollie",
    logo: "/placeholder.svg?height=40&width=120",
    description: "Pay with European payment methods",
  },
]

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("stripe")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-black border rounded-2xl shadow-lg p-0">

        {/* Header */}
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Choose payment method
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Selected Plan */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-zinc-400">Selected plan</h3>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{plan.name}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.price.unit}{plan.price.unit}
                  <span className="text-sm text-gray-500 dark:text-zinc-400">/{plan.period}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="grid gap-4">
              {paymentMethods.map((method) => (
                <Label
                  key={method.id}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 border rounded-lg cursor-pointer transition-all shadow-sm",
                    selectedMethod === method.id
                      ? "bg-black/10 dark:bg-white/10"
                      : "hover:border-gray-300 dark:hover:border-gray-700",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value={method.id} />
                    <div className="space-y-1">
                      <div className="font-medium text-gray-900 dark:text-white">{method.name}</div>
                      <div className="text-sm text-gray-500 dark:text-zinc-400">{method.description}</div>
                    </div>
                  </div>
                  <div className="h-8 w-20 relative">
                    <Image src={method.logo || "/placeholder.svg"} alt={method.name} fill className="object-contain" />
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <Button
            className="w-full bg-black hover:bg-neutral-900 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black font-semibold py-2 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={
              async () => {
                setIsLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 1500));
                setIsLoading(false);
                onClose();
              }
            }
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Continue to payment"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

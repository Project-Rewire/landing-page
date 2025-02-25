interface PricingPlanFeature {
    name: string
    isAvailable: boolean
}

interface PricingPlanPrice {
    value: number
    unit: string
}

interface PricingPlan {
    name: string
    price?: PricingPlanPrice
    period?: string
    features: PricingPlanFeature[]
    isComingSoon: boolean
}
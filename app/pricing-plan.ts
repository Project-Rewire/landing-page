export interface PricingPlanFeature {
    name: string
    isAvailable: boolean
}

export interface PricingPlanPrice {
    value: number
    unit: string
}

export interface PricingPlan {
    name: string
    price?: PricingPlanPrice
    period?: string
    features: PricingPlanFeature[]
    isComingSoon: boolean
}

export const plans: PricingPlan[] = [
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
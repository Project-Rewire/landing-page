"use client"

import { motion } from "framer-motion"
import { Bot, Users, BarChart, Brain } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Bot className="w-10 h-10 text-white" />,
      title: "AI Chatbot",
      description: "Get personalized support and guidance from our intelligent chatbot.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Community",
      description: "Connect with others on similar journeys for mutual support.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-white" />,
      title: "Progress Tracking",
      description: "Monitor your progress and celebrate milestones along your recovery.",
    },
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "Personalized Plans",
      description: "Receive tailored strategies based on your specific needs.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Rewire</h2>
            <p className="text-base text-gray-400 mb-4">
              Rewire is a revolutionary mobile application designed to empower individuals in their journey to overcome
              addictions. Our mission is to provide a structured, step-by-step approach to recovery without relying on
              medication.
            </p>
            <p className="text-base text-gray-400">
              By leveraging cutting-edge AI technology and fostering a supportive community, Rewire offers personalized
              guidance and tools to help you break free from both substance-based and behavioral addictions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image src="/placeholder.svg" alt="Rewire App" layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


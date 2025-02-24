import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rewire - Overcome Addictions with AI Support",
  description: "Rewire is a mobile app designed to help individuals overcome addictions through AI-powered support, structured approaches, and a supportive community.",
  icons: {
    icon: [
      { url: '/rewire-icon.png', sizes: '32x32' },
      { url: '/rewire-icon-192.png', sizes: '192x192' },
    ],
    apple: { url: '/rewire-icon-180.png', sizes: '180x180' },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

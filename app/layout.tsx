import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RevealMount } from "@/components/reveal-mount"
import MotionProvider from "@/components/motion-provider"
import BackgroundLogo from "@/components/background-logo"
import CursorFollower from "@/components/cursor-follower"
import { ThemeProvider } from "@/components/theme-provider"
import MouseEffects from "@/components/mouse-effects"
import CursorRipples from "@/components/cursor-ripples"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "WiCyS Chapter",
  description: "Women in Cybersecurity chapter website",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} scroll-smooth antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionProvider />
          <MouseEffects />
          <CursorFollower />
          <SiteHeader />
          <RevealMount />
          <BackgroundLogo />
          <CursorRipples />
          <Suspense fallback={null}>
            <main>{children}</main>
          </Suspense>
          <SiteFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

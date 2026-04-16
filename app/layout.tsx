import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from 'next'

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import PlausibleProvider from "next-plausible";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: '12LuA',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <head>
        <PlausibleProvider
          trackLocalhost
          enabled
          domain="12lua.github.io"
          customDomain="https://analytics.12lua.de"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <div className="background-gradient" />
        </ThemeProvider>
      </body>
    </html>
  )
}

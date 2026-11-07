import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from 'next'

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Script from 'next/script'

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
     
      </head>
      <body>
        <ThemeProvider>
          {children}
          <div className="background-gradient" />
        </ThemeProvider>
        <Script
          src="https://mau.12lua.de/script.js"
          data-website-id="92829ff0-c71e-456a-aab3-d2270c2a76a7"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import { Analytics } from "@/components/analytics"

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

const poppinsRegular = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-poppins-regular",
  display: "swap",
})

const poppinsSemi = localFont({
  src: "../public/fonts/Poppins-SemiBold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-poppins-semi",
  display: "swap",
})

const poppinsBold = localFont({
  src: "../public/fonts/Poppins-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-poppins-bold",
  display: "swap",
})

const ethnocentric = localFont({
  src: "../public/fonts/ethnocentric.otf",
  weight: "400",
  style: "normal",
  variable: "--font-ethnocentric",
  display: "swap",
})

const centuryGothic = localFont({
  src: "../public/fonts/centurygothic.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-century-gothic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hoverson Pest Control Services - Professional Pest Management",
  description:
    "Professional pest control services for your home and business. Licensed fumigator and exterminator serving your community with reliable pest management solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/ethnocentric" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/century-gothic" rel="stylesheet" />
        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8PDDZ885XE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8PDDZ885XE', {
                page_path: window.location.pathname,
                send_page_view: true,
                debug_mode: false
              });
            `,
          }}
        />
      </head>
      <body className={[
          poppinsRegular.variable,
          poppinsSemi.variable,
          poppinsBold.variable,
          ethnocentric.variable,
          centuryGothic.variable,
        ].join(" ")}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
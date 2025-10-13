import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"

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
  // ⛔ You pointed this at Century Gothic — switch to Poppins-Bold
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
      </head>
      <body className={[
          poppinsRegular.variable,
          poppinsSemi.variable,
          poppinsBold.variable,
          ethnocentric.variable,
          centuryGothic.variable,
        ].join(" ")}>{children}</body>
    </html>
  )
}

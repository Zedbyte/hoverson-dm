import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
      <body className="font-sans">{children}</body>
    </html>
  )
}

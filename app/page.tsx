"use client"

import Script from "next/script"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

export default function HoversonHome() {
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.gtag?.("event", "view_homepage")
          }
        })
      },
      { threshold: 0.5 },
    )

    const heroSection = document.getElementById("hero")
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-8PDDZ885XE" 
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PDDZ885XE', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Navigation />

      <section id="hero" className="relative bg-[#0E61AE]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <Badge variant="secondary" className="text-sm font-sub bg-white text-[#0E61AE] border-0 px-6 py-2">
                  Licensed & Certified Professionals
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-wordmark text-white leading-none tracking-tight">
                    HOVERSON
                  </h1>
                  <p className="text-3xl lg:text-4xl font-subtitle text-white">Trading & Pest Control Services</p>
                </div>
                <p className="text-2xl font-headline text-white italic leading-relaxed">
                  "Puts pests in their place not your place"
                </p>
                <p className="text-lg font-body text-white/90 max-w-xl leading-relaxed">
                  Professional pest control services you can trust. Licensed fumigator and exterminator with years of
                  experience protecting homes and businesses across Pampanga.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 font-sub bg-white text-[#0E61AE] hover:bg-[#151248] hover:text-white border-0 transition-all duration-300"
                  onClick={() => {
                    window.gtag?.("event", "click_get_quote")
                    router.push("/contact")
                  }}
                >
                  Get Free Quote
                </Button>
                <a href="tel:+639774240418" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg px-10 py-7 font-sub border-2 border-white text-white hover:bg-white hover:text-[#0E61AE] bg-transparent transition-all duration-300"
                    onClick={() => {
                      window.gtag?.("event", "click_call_button")
                    }}
                  >
                    0977 424 0418
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border-2 border-white/20">
                <Image
                  src="/images/hoverson-logo.png"
                  alt="Professional Pest Control Service"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...existing footer code... */}
      <footer className="bg-[#151248] text-white py-16 border-t-4 border-[#0E61AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Image
                src="/images/hoverson-logo.png"
                alt="Hoverson Pest Control"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
              <p className="font-body text-white/80 leading-relaxed">
                Professional pest control services protecting homes and businesses with reliable, safe solutions.
              </p>
            </div>
            <div>
              <h3 className="font-sub mb-6 text-xl">Services</h3>
              <ul className="space-y-3 font-body text-white/80">
                <li
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => router.push("/services")}
                >
                  Residential Pest Control
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => router.push("/services")}
                >
                  Commercial Extermination
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => router.push("/services")}
                >
                  Termite Treatment
                </li>
                <li
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => router.push("/services")}
                >
                  Fumigation Services
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-sub mb-6 text-xl">Company</h3>
              <ul className="space-y-3 font-body text-white/80">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => router.push("/about")}>
                  About Us
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => router.push("/about")}>
                  Our Team
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => router.push("/about")}>
                  Certifications
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => router.push("/about")}>
                  Service Areas
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-sub mb-6 text-xl">Contact</h3>
              <ul className="space-y-3 font-body text-white/80">
                <li>
                  <a href="tel:+639774240418" className="hover:text-white transition-colors">
                    0977 424 0418
                  </a>
                </li>
                <li>
                  <a href="mailto:hoversontrading@gmail.com" className="hover:text-white transition-colors">
                    hoversontrading@gmail.com
                  </a>
                </li>
                <li>Pampanga, Mabalacat City</li>
                <li>24/7 Emergency Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center font-body text-white/60">
            <p>&copy; 2025 Hoverson Pest Control Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

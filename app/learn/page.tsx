"use client"

import { useEffect } from "react"
import InteractivePestAnatomy from "@/components/interactive-pest-anatomy"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function LearnPage() {
  const router = useRouter()

  useEffect(() => {
    window.gtag?.("event", "view_learnpage")
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <InteractivePestAnatomy />

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

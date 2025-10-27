"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "Residential Pest Control",
      description: "Comprehensive pest management for your home and family's safety",
      image: "/images/hoverson-team-daycare.png",
    },
    {
      title: "Commercial Extermination",
      description: "Professional pest solutions for businesses and commercial properties",
      image: "/images/hoverson-anti-dengue-campaign.png",
    },
    {
      title: "Termite Treatment",
      description: "Specialized termite inspection, treatment, and prevention services",
      image: "/images/hoverson-pest-treatment.png",
    },
    {
      title: "Fumigation Services",
      description: "Licensed fumigation for severe infestations and structural treatments",
      image: "/images/hoverson-conference.png",
    },
  ]

  useEffect(() => {
    window.gtag?.("event", "view_servicespage")
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [services.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-headline text-[#151248] mb-6 tracking-tight">
              Our Professional Services
            </h1>
            <p className="text-xl font-body text-[#151248]/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive pest management solutions tailored to protect your property and peace of mind
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="border-2 border-[#0E61AE]/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-2xl overflow-hidden p-0">
                      <div className="relative h-80 w-full overflow-hidden bg-[#151248]/5">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-10 bg-white h-64 flex flex-col justify-between">
                        <div>
                          <h2 className="text-3xl font-sub text-[#151248] mb-4 tracking-tight">{service.title}</h2>
                          <p className="text-lg font-body leading-relaxed text-[#151248]/70">{service.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          className="w-fit font-sub border-2 border-[#0E61AE] text-[#0E61AE] hover:bg-[#0E61AE] hover:text-white bg-transparent transition-all duration-300 mt-6"
                          onClick={() => {
                            window.gtag?.("event", "click_service_learn_more", { service: service.title })
                            router.push("/contact")
                          }}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <Button
                variant="outline"
                className="pointer-events-auto bg-white hover:bg-[#0E61AE] hover:text-white border-2 border-[#0E61AE] h-14 w-14 rounded-full font-sub text-2xl shadow-lg transition-all duration-300"
                onClick={() => {
                  prevSlide()
                  window.gtag?.("event", "click_service_prev")
                }}
              >
                ←
              </Button>
              <Button
                variant="outline"
                className="pointer-events-auto bg-white hover:bg-[#0E61AE] hover:text-white border-2 border-[#0E61AE] h-14 w-14 rounded-full font-sub text-2xl shadow-lg transition-all duration-300"
                onClick={() => {
                  nextSlide()
                  window.gtag?.("event", "click_service_next")
                }}
              >
                →
              </Button>
            </div>

            <div className="flex justify-center mt-10 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#0E61AE] w-12" : "bg-[#0E61AE]/30 w-2.5 hover:bg-[#0E61AE]/50"}`}
                  onClick={() => {
                    setCurrentSlide(index)
                    window.gtag?.("event", "click_service_dot", { slide: index })
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
                <li className="hover:text-white transition-colors cursor-pointer">Residential Pest Control</li>
                <li className="hover:text-white transition-colors cursor-pointer">Commercial Extermination</li>
                <li className="hover:text-white transition-colors cursor-pointer">Termite Treatment</li>
                <li className="hover:text-white transition-colors cursor-pointer">Fumigation Services</li>
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

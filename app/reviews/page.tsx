"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

export default function ReviewsPage() {
  const router = useRouter()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Residential Customer",
      rating: 5,
      text: "Hoverson completely eliminated our termite problem. Professional, thorough, and reliable service. Highly recommend!",
    },
    {
      name: "Mike Chen",
      location: "Restaurant Owner",
      rating: 5,
      text: "They've been managing pest control for our restaurant chain for 3 years. Always responsive and effective.",
    },
    {
      name: "Lisa Rodriguez",
      location: "Property Manager",
      rating: 5,
      text: "Outstanding service for our apartment complex. Tenants are happy and pest-free. Great communication throughout.",
    },
  ]

  useEffect(() => {
    window.gtag?.("event", "view_reviewspage")
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-headline text-[#151248] mb-6 tracking-tight">
              What Our Customers Say
            </h1>
            <p className="text-xl font-body text-[#151248]/70 leading-relaxed">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="relative">
            <Card className="border-2 border-[#0E61AE]/20 hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center bg-white">
                <div className="flex justify-center mb-6 text-3xl text-[#0E61AE]">
                  {"★".repeat(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-2xl font-body text-[#151248] mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <div className="font-sub text-[#151248] text-xl mb-1">{testimonials[currentTestimonial].name}</div>
                  <div className="font-body text-[#151248]/70 text-lg">{testimonials[currentTestimonial].location}</div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-10 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-[#0E61AE] w-12" : "bg-[#0E61AE]/30 w-2.5 hover:bg-[#0E61AE]/50"}`}
                  onClick={() => {
                    setCurrentTestimonial(index)
                    window.gtag?.("event", "click_testimonial", { testimonial_index: index })
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
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

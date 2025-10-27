"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Navigation from "@/components/navigation"
import SubscriptionSection from "@/components/subscription-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "Residential Home",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>("")

  useEffect(() => {
    window.gtag?.("event", "view_contactpage")
  }, [])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setErrorMsg("")

    try {
      const target = e.target as HTMLFormElement
      const data = Object.fromEntries(new FormData(target).entries())

      const res = await fetch("https://formspree.io/f/movkbkzv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        window.gtag?.("event", "formspree", {
          event_category: "engagement",
          event_label: "contact_form_submission",
        })
        setSubmitSuccess(true)
        target.reset()
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          propertyType: "Residential Home",
          message: "",
        })
      } else {
        const payload = await res.json().catch(() => ({}) as any)
        const apiMsg =
          (payload as any)?.errors?.[0]?.message || (payload as any)?.message || "Submission failed. Please try again."
        setErrorMsg(apiMsg)
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-headline text-[#151248] mb-6 tracking-tight">
              Get Your Free Quote Today
            </h1>
            <p className="text-xl font-body text-[#151248]/70 max-w-3xl mx-auto leading-relaxed">
              Ready to protect your property? Contact us for a free consultation and customized pest control solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="border-2 border-[#0E61AE]/20 hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden">
                <CardHeader className="bg-white p-8">
                  <CardTitle className="text-3xl font-sub text-[#151248]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <a
                    href="tel:+639774240418"
                    className="flex items-start space-x-4 hover:bg-[#0E61AE]/5 p-6 rounded-2xl transition-colors"
                    onClick={() => window.gtag?.("event", "click_contact_phone")}
                  >
                    <div>
                      <div className="font-sub text-[#151248] mb-2 text-lg">Phone</div>
                      <div className="font-body text-[#0E61AE] hover:underline text-xl">0977 424 0418</div>
                    </div>
                  </a>
                  <a
                    href="mailto:hoversontrading@gmail.com"
                    className="flex items-start space-x-4 hover:bg-[#0E61AE]/5 p-6 rounded-2xl transition-colors"
                    onClick={() => window.gtag?.("event", "click_contact_email")}
                  >
                    <div>
                      <div className="font-sub text-[#151248] mb-2 text-lg">Email</div>
                      <div className="font-body text-[#0E61AE] hover:underline text-lg">hoversontrading@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-start space-x-4 p-6">
                    <div>
                      <div className="font-sub text-[#151248] mb-2 text-lg">Service Area</div>
                      <div className="font-body text-[#151248]/70 text-lg">
                        Pampanga, Mabalacat City & Surrounding Areas
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-[#0E61AE] text-white p-10 rounded-3xl border-4 border-[#0E61AE]">
                <h3 className="text-2xl font-sub mb-4">Emergency Services Available</h3>
                <p className="font-body mb-6 leading-relaxed text-lg">
                  Pest emergency? We offer 24/7 emergency pest control services for urgent situations.
                </p>
                <a href="tel:+639774240418">
                  <Button
                    size="lg"
                    className="hover:scale-105 transition-transform duration-200 font-sub bg-white text-[#0E61AE] hover:bg-[#151248] hover:text-white border-0 text-lg px-8 py-6"
                    onClick={() => window.gtag?.("event", "click_emergency_call")}
                  >
                    Call Emergency Line
                  </Button>
                </a>
              </div>
            </div>

            <Card className="border-2 border-[#0E61AE]/20 hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden">
              <CardHeader className="bg-white p-8">
                <CardTitle className="text-3xl font-sub text-[#151248]">Request Free Quote</CardTitle>
                <CardDescription className="font-body text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {submitSuccess ? (
                  <div className="flex flex-col items-center justify-center py-16 space-y-6">
                    <div className="text-7xl text-[#0E61AE]">✓</div>
                    <h3 className="text-3xl font-sub text-[#151248]">Thank You!</h3>
                    <p className="font-body text-[#151248]/70 text-center text-lg leading-relaxed">
                      Your quote request has been submitted successfully. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-sub text-[#151248] mb-3">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE] h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-sub text-[#151248] mb-3">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE] h-12 rounded-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-3">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE] h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-3">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0977 424 0418"
                        required
                        className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE] h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-3">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-[#0E61AE]/20 rounded-xl bg-white font-body focus:border-[#0E61AE] h-12"
                      >
                        <option>Residential Home</option>
                        <option>Commercial Building</option>
                        <option>Restaurant/Food Service</option>
                        <option>Apartment Complex</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-3">Describe Your Pest Problem</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about the pest issues you're experiencing..."
                        rows={4}
                        required
                        className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE] rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full hover:scale-105 transition-transform duration-200 font-sub bg-[#0E61AE] text-white hover:bg-[#151248] border-0 h-14 text-lg rounded-xl"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Get Free Quote"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SubscriptionSection />

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
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
                <li className="hover:text-white transition-colors cursor-pointer">Certifications</li>
                <li className="hover:text-white transition-colors cursor-pointer">Service Areas</li>
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

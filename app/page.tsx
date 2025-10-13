"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import InteractivePestAnatomy from "@/components/interactive-pest-anatomy"
import Navigation from "@/components/navigation"
import SubscriptionSection from "@/components/subscription-section"

export default function HoversonPestControl() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  const certifications = ["PPMO Certified", "FDA Approved", "PYCOR Incorporated", "Licensed Fumigator"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [services.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    console.log("[v0] Form submitted:", formData)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyType: "Residential Home",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative bg-[#0E61AE]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-sub bg-white text-[#0E61AE] border-0">
                  Licensed & Certified Professionals
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-wordmark text-white leading-tight">HOVERSON</h1>
                <p className="text-2xl lg:text-3xl font-subtitle text-white/95">Trading & Pest Control Services</p>
                <p className="text-xl lg:text-2xl font-headline text-white/90 italic">
                  "Puts pests in their place not your place"
                </p>
                <p className="text-lg font-body text-white/80 max-w-lg leading-relaxed">
                  Professional pest control services you can trust. Licensed fumigator and exterminator with years of
                  experience protecting homes and businesses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 font-sub bg-white text-[#0E61AE] hover:bg-[#151248] hover:text-white border-0"
                >
                  Get Free Quote
                </Button>
                <a href="tel:+639774240418">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 font-sub border-2 border-white text-white hover:bg-white hover:text-[#0E61AE] bg-transparent w-full sm:w-auto"
                  >
                    0977 424 0418
                  </Button>
                </a>
              </div>
            </div>
            {/* <div className="relative">
              <div className="bg-white rounded-2xl p-2 border-4 border-white/20">
                <Image
                  src="/images/hoverson-logo.png"
                  alt="Professional Pest Control Service"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-headline text-[#151248] mb-4">Our Professional Services</h2>
            <p className="text-xl font-body text-[#151248]/70 max-w-3xl mx-auto">
              Comprehensive pest management solutions tailored to protect your property and peace of mind
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-2 border-[#0E61AE]/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-2xl">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover rounded-l-lg"
                          />
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center bg-white">
                          <CardTitle className="text-3xl font-sub text-[#151248] mb-4">{service.title}</CardTitle>
                          <CardDescription className="text-lg font-body mb-6 leading-relaxed text-[#151248]/70">
                            {service.description}
                          </CardDescription>
                          <Button
                            variant="outline"
                            className="w-fit font-sub border-2 border-[#0E61AE] text-[#0E61AE] hover:bg-[#0E61AE] hover:text-white bg-transparent"
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#0E61AE] hover:text-white border-2 border-[#0E61AE] h-12 w-12 font-sub text-xl"
              onClick={prevSlide}
            >
              ←
            </Button>
            <Button
              variant="outline"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#0E61AE] hover:text-white border-2 border-[#0E61AE] h-12 w-12 font-sub text-xl"
              onClick={nextSlide}
            >
              →
            </Button>

            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all ${index === currentSlide ? "bg-[#0E61AE] w-8" : "bg-[#0E61AE]/30 w-3"}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pest Anatomy Component */}
      <InteractivePestAnatomy />

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-headline text-[#151248] mb-6">
                  Why Choose Hoverson Pest Control?
                </h2>
                <p className="text-lg font-body text-[#151248]/70 mb-8 leading-relaxed">
                  With years of experience and proper licensing, we provide reliable pest management solutions that
                  protect what matters most to you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#0E61AE]/5 p-6 rounded-lg border-2 border-[#0E61AE]/10">
                  <h3 className="font-sub text-[#151248] mb-2 text-lg">Expert Team</h3>
                  <p className="font-body text-[#151248]/70 text-sm">Licensed professionals with extensive training</p>
                </div>
                <div className="bg-[#0E61AE]/5 p-6 rounded-lg border-2 border-[#0E61AE]/10">
                  <h3 className="font-sub text-[#151248] mb-2 text-lg">Fast Response</h3>
                  <p className="font-body text-[#151248]/70 text-sm">Quick scheduling and emergency services</p>
                </div>
                <div className="bg-[#0E61AE]/5 p-6 rounded-lg border-2 border-[#0E61AE]/10">
                  <h3 className="font-sub text-[#151248] mb-2 text-lg">Safe Methods</h3>
                  <p className="font-body text-[#151248]/70 text-sm">Eco-friendly and family-safe treatments</p>
                </div>
                <div className="bg-[#0E61AE]/5 p-6 rounded-lg border-2 border-[#0E61AE]/10">
                  <h3 className="font-sub text-[#151248] mb-2 text-lg">Guaranteed</h3>
                  <p className="font-body text-[#151248]/70 text-sm">Satisfaction guarantee on all services</p>
                </div>
              </div>

              <div className="bg-[#151248] p-6 rounded-lg border-2 border-[#151248]">
                <h3 className="font-sub text-white mb-4">Our Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-sm font-body text-white/90">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hoverson-pest-treatment.png"
                alt="Professional Pest Control Expert"
                width={500}
                height={600}
                className="rounded-2xl border-4 border-[#0E61AE]/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0E61AE] text-white p-6 rounded-lg border-4 border-white">
                <div className="text-4xl font-headline">15+</div>
                <div className="text-sm font-body">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#151248]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-headline text-white mb-4">
              Community Impact & Professional Recognition
            </h2>
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
              Beyond pest control, we're committed to community health and professional excellence through education and
              partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "/images/hoverson-team-daycare.png",
                title: "Community Outreach",
                description: "Providing pest control services to community centers and educational facilities.",
              },
              {
                image: "/images/hoverson-anti-dengue-campaign.png",
                title: "Public Health Campaigns",
                description: "Active participation in anti-dengue and public health awareness programs.",
              },
              {
                image: "/images/hoverson-pest-treatment.png",
                title: "Professional Service",
                description: "Licensed professionals using proper safety equipment and proven methods.",
              },
              {
                image: "/images/hoverson-conference.png",
                title: "Industry Leadership",
                description: "Active members of professional pest management associations and conferences.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 border-white/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-2xl group overflow-hidden bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-sub text-[#151248] mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm font-body text-[#151248]/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-headline text-[#151248] mb-4">What Our Customers Say</h2>
            <p className="text-xl font-body text-[#151248]/70">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="relative">
            <Card className="border-2 border-[#0E61AE]/20 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 md:p-12 text-center bg-white">
                <div className="flex justify-center mb-4 text-2xl">
                  {"★".repeat(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl font-body text-[#151248] mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <div className="font-sub text-[#151248] text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="font-body text-[#151248]/70">{testimonials[currentTestimonial].location}</div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all ${index === currentTestimonial ? "bg-[#0E61AE] w-8" : "bg-[#0E61AE]/30 w-3"}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SubscriptionSection />

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-headline text-[#151248] mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl font-body text-[#151248]/70 max-w-3xl mx-auto">
              Ready to protect your property? Contact us for a free consultation and customized pest control solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Card className="border-2 border-[#0E61AE]/20 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-sub text-[#151248]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <a
                    href="tel:+639774240418"
                    className="flex items-start space-x-4 hover:bg-[#0E61AE]/5 p-4 rounded-lg transition-colors"
                  >
                    <div>
                      <div className="font-sub text-[#151248] mb-1">Phone</div>
                      <div className="font-body text-[#0E61AE] hover:underline text-lg">0977 424 0418</div>
                    </div>
                  </a>
                  <a
                    href="mailto:hoversontrading@gmail.com"
                    className="flex items-start space-x-4 hover:bg-[#0E61AE]/5 p-4 rounded-lg transition-colors"
                  >
                    <div>
                      <div className="font-sub text-[#151248] mb-1">Email</div>
                      <div className="font-body text-[#0E61AE] hover:underline">hoversontrading@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-start space-x-4 p-4">
                    <div>
                      <div className="font-sub text-[#151248] mb-1">Service Area</div>
                      <div className="font-body text-[#151248]/70">Pampanga, Mabalacat City & Surrounding Areas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-[#0E61AE] text-white p-8 rounded-lg border-4 border-[#0E61AE]">
                <h3 className="text-xl font-sub mb-4">Emergency Services Available</h3>
                <p className="font-body mb-4 leading-relaxed">
                  Pest emergency? We offer 24/7 emergency pest control services for urgent situations.
                </p>
                <a href="tel:+639774240418">
                  <Button
                    size="lg"
                    className="hover:scale-105 transition-transform duration-200 font-sub bg-white text-[#0E61AE] hover:bg-[#151248] hover:text-white border-0"
                  >
                    Call Emergency Line
                  </Button>
                </a>
              </div>
            </div>

            <Card className="border-2 border-[#0E61AE]/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-sub text-[#151248]">Request Free Quote</CardTitle>
                <CardDescription className="font-body">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="text-6xl text-[#0E61AE]">✓</div>
                    <h3 className="text-2xl font-sub text-[#151248]">Thank You!</h3>
                    <p className="font-body text-[#151248]/70 text-center">
                      Your quote request has been submitted successfully. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-sub text-[#151248] mb-2">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-sub text-[#151248] mb-2">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0977 424 0418"
                        required
                        className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-2">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-[#0E61AE]/20 rounded-md bg-background font-body focus:border-[#0E61AE]"
                      >
                        <option>Residential Home</option>
                        <option>Commercial Building</option>
                        <option>Restaurant/Food Service</option>
                        <option>Apartment Complex</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-sub text-[#151248] mb-2">Describe Your Pest Problem</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about the pest issues you're experiencing..."
                        rows={4}
                        required
                        className="font-body border-2 border-[#0E61AE]/20 focus:border-[#0E61AE]"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full hover:scale-105 transition-transform duration-200 font-sub bg-[#0E61AE] text-white hover:bg-[#151248] border-0"
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

      <footer className="bg-[#151248] text-white py-12 border-t-4 border-[#0E61AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/hoverson-logo.png"
                alt="Hoverson Pest Control"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
              <p className="font-body text-white/80 leading-relaxed">
                Professional pest control services protecting homes and businesses with reliable, safe solutions.
              </p>
            </div>
            <div>
              <h3 className="font-sub mb-4">Services</h3>
              <ul className="space-y-2 font-body text-white/80">
                <li className="hover:text-white transition-colors cursor-pointer">Residential Pest Control</li>
                <li className="hover:text-white transition-colors cursor-pointer">Commercial Extermination</li>
                <li className="hover:text-white transition-colors cursor-pointer">Termite Treatment</li>
                <li className="hover:text-white transition-colors cursor-pointer">Fumigation Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-sub mb-4">Company</h3>
              <ul className="space-y-2 font-body text-white/80">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
                <li className="hover:text-white transition-colors cursor-pointer">Certifications</li>
                <li className="hover:text-white transition-colors cursor-pointer">Service Areas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-sub mb-4">Contact</h3>
              <ul className="space-y-2 font-body text-white/80">
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
          <div className="border-t border-white/20 mt-8 pt-8 text-center font-body text-white/60">
            <p>&copy; 2025 Hoverson Trading & Pest Control Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

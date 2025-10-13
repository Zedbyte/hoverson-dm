"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b-2 border-[#0E61AE]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/images/hoverson-logo.png"
              alt="Hoverson Pest Control"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-sub text-[#151248] hover:text-[#0E61AE] transition-colors">
              Services
            </a>
            <a href="#about" className="font-sub text-[#151248] hover:text-[#0E61AE] transition-colors">
              About
            </a>
            <a href="#learn" className="font-sub text-[#151248] hover:text-[#0E61AE] transition-colors">
              Learn
            </a>
            <a href="#testimonials" className="font-sub text-[#151248] hover:text-[#0E61AE] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="font-sub text-[#151248] hover:text-[#0E61AE] transition-colors">
              Contact
            </a>
            <a href="tel:+639774240418">
              <Button className="bg-[#0E61AE] text-white hover:bg-[#151248] font-sub">Call Now</Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#151248] font-sub">
              {isMenuOpen ? "Close" : "Menu"}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t-2 border-[#0E61AE]/10">
            <a
              href="#services"
              className="block font-sub text-[#151248] hover:text-[#0E61AE] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block font-sub text-[#151248] hover:text-[#0E61AE] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#learn"
              className="block font-sub text-[#151248] hover:text-[#0E61AE] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </a>
            <a
              href="#testimonials"
              className="block font-sub text-[#151248] hover:text-[#0E61AE] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block font-sub text-[#151248] hover:text-[#0E61AE] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a href="tel:+639774240418">
              <Button className="w-full bg-[#0E61AE] text-white hover:bg-[#151248] font-sub">Call Now</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

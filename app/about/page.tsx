"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const certifications = ["PPMO Certified", "FDA Approved", "PYCOR Incorporated", "Licensed Fumigator"]

  useEffect(() => {
    window.gtag?.("event", "view_aboutpage")
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h1 className="text-5xl lg:text-6xl font-headline text-[#151248] mb-8 tracking-tight leading-tight">
                  Why Choose Hoverson Pest Control?
                </h1>
                <p className="text-xl font-body text-[#151248]/70 leading-relaxed">
                  With years of experience and proper licensing, we provide reliable pest management solutions that
                  protect what matters most to you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border-2 border-[#0E61AE]/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-lg">
                  <h3 className="font-sub text-[#151248] mb-3 text-xl">Expert Team</h3>
                  <p className="font-body text-[#151248]/70 leading-relaxed">
                    Licensed professionals with extensive training
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border-2 border-[#0E61AE]/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-lg">
                  <h3 className="font-sub text-[#151248] mb-3 text-xl">Fast Response</h3>
                  <p className="font-body text-[#151248]/70 leading-relaxed">Quick scheduling and emergency services</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border-2 border-[#0E61AE]/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-lg">
                  <h3 className="font-sub text-[#151248] mb-3 text-xl">Safe Methods</h3>
                  <p className="font-body text-[#151248]/70 leading-relaxed">Eco-friendly and family-safe treatments</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border-2 border-[#0E61AE]/20 hover:border-[#0E61AE] transition-all duration-300 hover:shadow-lg">
                  <h3 className="font-sub text-[#151248] mb-3 text-xl">Guaranteed</h3>
                  <p className="font-body text-[#151248]/70 leading-relaxed">Satisfaction guarantee on all services</p>
                </div>
              </div>

              <div className="bg-[#151248] p-8 rounded-2xl border-2 border-[#151248]">
                <h3 className="font-sub text-white mb-6 text-xl">Our Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="font-body text-white/90">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-4 border-[#0E61AE]/20">
                <Image
                  src="/images/hoverson-pest-treatment.png"
                  alt="Professional Pest Control Expert"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#0E61AE] text-white p-8 rounded-2xl border-4 border-white shadow-2xl">
                <div className="text-5xl font-headline mb-2">15+</div>
                <div className="font-body text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#151248]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-headline text-white mb-6 tracking-tight">
              Community Impact & Professional Recognition
            </h2>
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto leading-relaxed">
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
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-sub text-[#151248] mb-3 text-xl">{item.title}</h3>
                  <p className="font-body text-[#151248]/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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

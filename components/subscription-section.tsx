"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function SubscriptionSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Subscription email:", email)
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-20 bg-[#0E61AE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-white/20 bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-headline text-[#151248] mb-4">
                Stay Protected with Pest Control Tips
              </h2>
              <p className="text-lg font-body text-[#151248]/80 max-w-2xl mx-auto">
                Subscribe to our newsletter for seasonal pest prevention tips, exclusive offers, and expert advice
                delivered to your inbox.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white border-2 border-[#0E61AE]/20 font-body text-[#151248] placeholder:text-[#151248]/50"
                />
                <Button
                  type="submit"
                  className="bg-[#0E61AE] text-white hover:bg-[#151248] font-sub px-8 whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-[#0E61AE]">
                <span className="font-sub text-lg">Successfully subscribed! Check your email.</span>
              </div>
            )}

            <p className="text-center text-[#151248]/60 text-sm font-body mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Use a separate Formspree form if you want to keep newsletter
// submissions apart from quote requests. For now you can reuse the same ID.
const NEWSLETTER_FORM_ID = "movkbkzv" // replace with your dedicated newsletter form ID if you create one

export default function SubscriptionSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>("")

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSubscribed(false)
    setErrorMsg("")

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch(`https://formspree.io/f/${NEWSLETTER_FORM_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",          // important for JSON response
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          formName: "Newsletter Subscription",   // helpful label in Formspree inbox
        }),
      })

      if (res.ok) {
        setIsSubscribed(true)
        form.reset()
        setEmail("")
      } else {
        const payload = await res.json().catch(() => ({} as any))
        const apiMsg =
          (payload as any)?.errors?.[0]?.message ||
          (payload as any)?.message ||
          "Subscription failed. Please try again."
        setErrorMsg(apiMsg)
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
                  name="email"                          // <-- Formspree needs a named field
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white border-2 border-[#0E61AE]/20 font-body text-[#151248] placeholder:text-[#151248]/50"
                />

                {/* Honeypot to reduce bot spam */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0E61AE] text-white hover:bg-[#151248] font-sub px-8 whitespace-nowrap"
                >
                  {isSubmitting ? "Submitting..." : "Subscribe Now"}
                </Button>

                {errorMsg && (
                  <p role="alert" className="sm:col-span-2 text-red-600 text-sm font-body">
                    {errorMsg}
                  </p>
                )}
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

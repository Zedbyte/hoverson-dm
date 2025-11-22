"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Mailchimp endpoint from your embedded form
const MAILCHIMP_URL = "https://gmail.us10.list-manage.com/subscribe/post?u=4ff187d69782b8b74857614c1&id=c2901020a0&f_id=007649e4f0"

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

    try {
      // Mailchimp requires form-urlencoded submission
      const formData = new FormData()
      formData.append("EMAIL", email)
      // Add honeypot field to prevent bots
      formData.append("b_4ff187d69782b8b74857614c1_c2901020a0", "")

      // Use JSONP approach to avoid CORS issues with Mailchimp
      const urlParams = new URLSearchParams()
      urlParams.append("EMAIL", email)
      urlParams.append("b_4ff187d69782b8b74857614c1_c2901020a0", "")

      // Mailchimp's subscribe endpoint with JSONP callback
      const jsonpUrl = MAILCHIMP_URL.replace("/post?", "/post-json?") + `&${urlParams.toString()}&c=__callback`

      // Create a script tag for JSONP
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script")
        const callbackName = `mailchimp_callback_${Date.now()}`

        // @ts-ignore
        window[callbackName] = (data: any) => {
          // @ts-ignore
          delete window[callbackName]
          document.body.removeChild(script)

          if (data.result === "success") {
            resolve()
          } else {
            reject(new Error(data.msg || "Subscription failed"))
          }
        }

        script.src = jsonpUrl.replace("__callback", callbackName)
        script.onerror = () => {
          // @ts-ignore
          delete window[callbackName]
          document.body.removeChild(script)
          reject(new Error("Network error"))
        }

        document.body.appendChild(script)
      })

      setIsSubscribed(true)
      setEmail("")
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Subscription failed. Please try again."
      // Clean up Mailchimp's HTML error messages
      const cleanMessage = errorMessage.replace(/<[^>]*>/g, "").replace(/^\d+\s*-\s*/, "")
      setErrorMsg(cleanMessage)
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

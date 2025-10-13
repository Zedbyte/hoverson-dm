"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Bug, Shield } from "lucide-react"
import Image from "next/image"

interface PestPart {
  id: string
  name: string
  description: string
  x: number
  y: number
  color: string
}

const beetleParts: PestPart[] = [
  {
    id: "head",
    name: "Head & Mandibles",
    description: "Powerful jaws that can chew through wood and organic materials, causing structural damage.",
    x: 50,
    y: 25,
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    id: "antennae",
    name: "Antennae",
    description: "Sensory organs that detect food sources, pheromones, and environmental changes.",
    x: 70,
    y: 17,
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    id: "thorax",
    name: "Thorax",
    description: "Contains flight muscles and houses the legs. Critical for movement and mobility.",
    x: 50,
    y: 35,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: "elytra",
    name: "Elytra (Wing Covers)",
    description: "Hardened forewings that protect the delicate flight wings underneath.",
    x: 50,
    y: 55,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    id: "legs",
    name: "Six Legs",
    description: "Powerful legs for climbing, digging, and moving through various terrains and materials.",
    x: 35,
    y: 45,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    id: "abdomen",
    name: "Abdomen",
    description: "Contains digestive and reproductive organs. Houses the systems that process food.",
    x: 50,
    y: 75,
    color: "bg-orange-500 hover:bg-orange-600",
  },
]

export default function InteractivePestAnatomy() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null)

  const handlePartClick = (partId: string) => {
    setSelectedPart(selectedPart === partId ? null : partId)
  }

  const selectedPartData = beetleParts.find((part) => part.id === selectedPart)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Interactive Learning Tool
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Know Your Enemy: Pest Anatomy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding pest biology helps us target them more effectively. Click on different parts to learn how each
            contributes to the damage they cause.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Beetle Diagram */}
          <div className="relative">
            <Card className="border-2 border-accent/20 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Bug className="w-6 h-6 text-accent" />
                  Interactive Pest Anatomy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative mx-auto max-w-md">
                  <TooltipProvider>
                    {/* Beetle Image */}
                    <div className="relative">
                      <Image
                        src="/images/beetle-anatomy.png"
                        alt="Beetle Anatomy"
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />

                      {/* Interactive Hotspots */}
                      {beetleParts.map((part) => (
                        <Tooltip key={part.id}>
                          <TooltipTrigger asChild>
                            <button
                              className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-125 focus:scale-125 focus:outline-none ${
                                part.color
                              } ${
                                selectedPart === part.id
                                  ? "scale-125 ring-4 ring-accent/50"
                                  : "hover:ring-2 hover:ring-accent/30"
                              }`}
                              style={{
                                left: `${part.x}%`,
                                top: `${part.y}%`,
                                transform: "translate(-50%, -50%)",
                              }}
                              onClick={() => handlePartClick(part.id)}
                              aria-label={`Learn about ${part.name}`}
                            >
                              <span className="sr-only">{part.name}</span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <div className="space-y-2">
                              <p className="font-semibold">{part.name}</p>
                              <p className="text-sm">{part.description}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </div>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Click on the colored dots to explore pest anatomy
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            {selectedPartData ? (
              <Card className="border-2 border-accent/20 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${selectedPartData.color.split(" ")[0]}`}>
                      <Bug className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{selectedPartData.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{selectedPartData.description}</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-dashed border-muted bg-muted/20 hover:bg-muted/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Bug className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">Explore Pest Anatomy</h3>
                  <p className="text-muted-foreground">
                    Click on the colored dots on the pest diagram to learn about each body part and how it contributes
                    to the damage pests cause.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Why This Matters */}
            <Card className="bg-accent/5 border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Why Understanding Pests Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  • <strong>Targeted Treatment:</strong> Knowing pest biology helps us choose the most effective
                  treatment methods
                </p>
                <p className="text-muted-foreground">
                  • <strong>Early Detection:</strong> Understanding their behavior patterns helps identify infestations
                  sooner
                </p>
                <p className="text-muted-foreground">
                  • <strong>Prevention:</strong> Knowledge of what attracts pests helps prevent future infestations
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary">$5B+</div>
                <div className="text-sm text-muted-foreground">Annual damage in US</div>
              </Card>
              <Card className="text-center p-4 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Pests never sleep</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

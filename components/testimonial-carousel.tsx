"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "The coaching at Gbawe Basketball Academy has completely transformed my game. I've improved more in 6 months here than in years of playing elsewhere.",
    name: "Jason Williams",
    role: "High School Player",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "As a parent, I've seen my daughter's confidence grow tremendously since joining the academy. The coaches focus on developing the whole player, not just basketball skills.",
    name: "Sarah Johnson",
    role: "Parent",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "The personalized training and attention to detail is what sets this academy apart. They identified specific areas I needed to work on and created a plan to help me improve.",
    name: "Michael Chen",
    role: "College Player",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 mb-6 opacity-20" />
                <p className="text-xl md:text-2xl mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="opacity-75">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${current === index ? "bg-white" : "bg-white/30"}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 rounded-full"
        onClick={next}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}

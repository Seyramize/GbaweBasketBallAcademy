import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={href} className="text-orange-500 font-medium inline-flex items-center">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

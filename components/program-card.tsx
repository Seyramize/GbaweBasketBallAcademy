import Image from "next/image"
import { Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProgramCardProps {
  title: string
  description: string
  imageSrc: string
  price: string
  schedule: string
}

export default function ProgramCard({ title, description, imageSrc, price, schedule }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <DollarSign className="h-4 w-4 mr-2 text-orange-500" />
          {price}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4 mr-2 text-orange-500" />
          {schedule}
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Register Now</Button>
      </div>
    </div>
  )
}

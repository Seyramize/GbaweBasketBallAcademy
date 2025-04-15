import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CoachCardProps {
  name: string
  title: string
  bio: string
  imageSrc: string
}

export default function CoachCard({ name, title, bio, imageSrc }: CoachCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
          {title}
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="rounded-full bg-gray-100 hover:bg-gray-200 p-2">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full bg-gray-100 hover:bg-gray-200 p-2">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full bg-gray-100 hover:bg-gray-200 p-2">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CoachesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Basketball coaches"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Our Coaching Staff
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Meet our team of experienced coaches dedicated to developing players and fostering a love for the game.
          </p>
        </div>
      </section>

      {/* Coaches Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Coaching Staff</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our coaches bring professional experience, passion, and a commitment to excellence to every training
              session.
            </p>
          </div>

          {/* Head Coach */}
          <div className="mb-20">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-80 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Michael Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Head Coach
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Michael Johnson</h3>
                  <p className="text-gray-600 mb-6">
                    Former NBA player with 15 years of coaching experience at the professional and collegiate levels.
                    Coach Johnson has developed dozens of players who have gone on to play at the college and
                    professional levels.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">Career Highlights:</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>7 years professional playing experience</li>
                        <li>NCAA Division I Coach of the Year (2015)</li>
                        <li>Developed 25+ college scholarship athletes</li>
                        <li>USA Basketball Youth Development Certified</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Coaching Philosophy:</h4>
                      <p className="text-gray-600">
                        "Basketball is more than just a game – it's a vehicle for developing character, discipline, and
                        teamwork. I believe in pushing players to reach their full potential while making the journey
                        enjoyable."
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-6">
                    <Button variant="ghost" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-300">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Coaches */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Williams",
                title: "Skills Development Coach",
                bio: "D1 college player specializing in guard skill development with 10 years of coaching experience.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Thompson",
                title: "Youth Development Coach",
                bio: "20+ years experience working with young athletes, specializing in building fundamentals and love for the game.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Rodriguez",
                title: "Strength & Conditioning Coach",
                bio: "Certified strength coach with expertise in basketball-specific training and injury prevention.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Lisa Chen",
                title: "Assistant Coach",
                bio: "Former collegiate player with expertise in player development and offensive strategy.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Marcus Wilson",
                title: "Shooting Coach",
                bio: "Shooting specialist who has helped players at all levels improve their shooting mechanics and percentages.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Tanya Brooks",
                title: "Girls Program Director",
                bio: "Former WNBA player dedicated to developing female athletes and growing women's basketball.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((coach, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {coach.title}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                  <p className="text-gray-600 mb-4">{coach.bio}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Coaching Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate, experienced coaches to join our team. If you have a background in
            basketball and a desire to develop players, we'd love to hear from you.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  )
}

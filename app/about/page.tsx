import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Star, Clock, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Basketball team"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            About Our Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Developing basketball players and building character since 2005.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Gbawe Basketball Academy was founded in 2005 by former professional player Michael Johnson with a
                  simple mission: to provide high-quality basketball training that develops not just better players, but
                  better people.
                </p>
                <p className="text-gray-600">
                  What started as small training sessions in a local community center has grown into one of the region's
                  premier basketball development programs, with state-of-the-art facilities and a team of experienced
                  coaches dedicated to player development.
                </p>
                <p className="text-gray-600">
                  Over the past 18 years, we've helped thousands of players improve their skills, with many going on to
                  successful high school, college, and even professional careers. But we're most proud of the life
                  skills and values our players develop through our program.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=600&width=800" alt="Academy history" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe basketball is more than just a game – it's a vehicle for developing character, discipline, and
              teamwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    <Trophy className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Striving for excellence in everything we do, on and off the court.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold mb-2">Teamwork</h3>
                  <p className="text-sm text-gray-600">
                    Learning to work together and support each other to achieve common goals.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    <Star className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold mb-2">Integrity</h3>
                  <p className="text-sm text-gray-600">Doing the right thing, even when no one is watching.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold mb-2">Discipline</h3>
                  <p className="text-sm text-gray-600">Building habits of hard work, consistency, and dedication.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    <Target className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold mb-2">Growth</h3>
                  <p className="text-sm text-gray-600">Embracing challenges and continuously improving.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    <Heart className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold mb-2">Passion</h3>
                  <p className="text-sm text-gray-600">Bringing energy and enthusiasm to everything we do.</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To provide a positive, supportive environment where players of all ages and skill levels can develop
                  their basketball abilities while building character, confidence, and a lifelong love for the game.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be recognized as the premier basketball development program that not only produces skilled players
                  but also helps shape responsible, confident individuals who succeed in all areas of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art training facilities designed to provide the optimal environment for player development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Basketball courts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professional Courts</h3>
                <p className="text-gray-600 mb-4">
                  Four full-size basketball courts with professional-grade flooring, backboards, and lighting.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Training equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Training Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Advanced training tools including shooting machines, agility equipment, and video analysis technology.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Fitness center" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fitness Center</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated strength and conditioning area with basketball-specific training equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We measure our success by the growth and achievements of our players.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <p className="text-gray-600">College Scholarships</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <p className="text-gray-600">Professional Players</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">75+</div>
              <p className="text-gray-600">Championship Teams</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
              <p className="text-gray-600">Players Trained</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/success-stories">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Read Success Stories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Community outreach"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Community Involvement</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We believe in giving back to the community that supports us. Through various outreach programs, we
                  strive to make basketball accessible to all and use the sport as a positive influence in our
                  community.
                </p>
                <p className="text-gray-600">
                  Our initiatives include free youth clinics in underserved areas, equipment donations to local schools,
                  scholarship programs for players with financial need, and volunteer coaching at community centers.
                </p>
                <p className="text-gray-600">
                  We also partner with local organizations to host charity events and fundraisers, using basketball as a
                  vehicle to support important causes in our community.
                </p>
                <div className="pt-4">
                  <Link href="/community">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Learn About Our Community Programs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Basketball Family</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a beginner just starting out or an experienced player looking to take your game to the next
            level, we have a program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

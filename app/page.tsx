import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Award, Calendar, Users, Clock, ArrowRight, ChevronLeft, ChevronRightCircleIcon, ChevronLeftCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FeatureCard from "@/components/feature-card"
import CoachCard from "@/components/coach-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Basketball court"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Elite Basketball Training
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Train Like A Hunter. Trust. Obey. Become.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              The journey begins in Gbawe - where young athletes transform into disciplined warriors on and off the court.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Join The Academy <ChevronRightCircleIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Meet The Hunters
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Game Schedule <ChevronLeftCircleIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-32 z-10" />
      </section>

      {/* Featured Programs */}
      <section
        className="py-20 bg-white bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 bg-white/80 p-6 rounded-lg">
            <h3 className="text-3xl md:text-3xl font-italic mb-4">
              At Gbawe Basketball Academy, we develop more than skills - we shape mindsets. Every athlete is trained to think like a hunter: to track their goals, stalk them with discipline, strike with focus, and become the best version of themselves.
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Guided by the motto <b>"Trust. Obey. Become".</b> Our training blends elite basketball development with leadership, mental toughness, and cultural pride rooted in our heritage.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive basketball training programs designed to develop skills, build confidence, and foster a love
              for the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Youth Development"
              description="Foundational skills and fundamentals for young players ages 7-12."
              icon={<Users className="h-10 w-10 text-orange-500" />}
              href="/programs/youth"
            />
            <FeatureCard
              title="Elite Training"
              description="Advanced skills and competitive training for serious players ages 13-18."
              icon={<Award className="h-10 w-10 text-orange-500" />}
              href="/programs/elite"
            />
            <FeatureCard
              title="Summer Camps"
              description="Intensive week-long camps focusing on all aspects of basketball."
              icon={<Calendar className="h-10 w-10 text-orange-500" />}
              href="/programs/camps"
            />
            <FeatureCard
              title="Private Coaching"
              description="One-on-one sessions tailored to individual player needs and goals."
              icon={<Clock className="h-10 w-10 text-orange-500" />}
              href="/programs/private"
            />
            <FeatureCard
              title="Team Training"
              description="Specialized training for school and club teams to improve team chemistry."
              icon={<Users className="h-10 w-10 text-orange-500" />}
              href="/programs/team"
            />
            <FeatureCard
              title="Adult Leagues"
              description="Recreational and competitive leagues for adult players of all skill levels."
              icon={<Calendar className="h-10 w-10 text-orange-500" />}
              href="/programs/adult"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Coaches</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from experienced coaches with professional backgrounds and a passion for developing players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CoachCard
              name="Michael Johnson"
              title="Head Coach"
              bio="Former NBA player with 15 years of coaching experience."
              imageSrc="/placeholder.svg?height=400&width=400"
            />
            <CoachCard
              name="Sarah Williams"
              title="Skills Development Coach"
              bio="D1 college player specializing in guard skill development."
              imageSrc="/placeholder.svg?height=400&width=400"
            />
            <CoachCard
              name="David Thompson"
              title="Youth Development Coach"
              bio="20+ years experience working with young athletes."
              imageSrc="/placeholder.svg?height=400&width=400"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/coaches">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                View All Coaches <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Players Say</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Hear from players and parents who have experienced the difference our academy makes.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Game?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our academy today and start your journey toward basketball excellence. Limited spots available for
              our upcoming sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News/Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with academy news, events, and basketball tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image src={`/placeholder.svg?height=300&width=500`} alt="Blog post" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">June 15, 2023</div>
                  <h3 className="text-xl font-bold mb-2">Summer Camp Registration Now Open</h3>
                  <p className="text-gray-600 mb-4">
                    Our popular summer basketball camps are back with more sessions and new training programs.
                  </p>
                  <Link href="/news/summer-camp" className="text-orange-500 font-medium inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/news">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

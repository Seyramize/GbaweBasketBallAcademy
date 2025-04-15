import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProgramCard from "@/components/program-card"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Basketball training"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Training Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Comprehensive basketball training programs designed for players at every stage of development.
          </p>
        </div>
      </section>

      {/* Programs Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">All Programs</TabsTrigger>
                <TabsTrigger value="youth">Youth</TabsTrigger>
                <TabsTrigger value="elite">Elite</TabsTrigger>
                <TabsTrigger value="camps">Camps</TabsTrigger>
                <TabsTrigger value="adult">Adult</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-16">
              {/* Youth Programs */}
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">
                  Youth Development Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Rookie Stars (Ages 7-9)"
                    description="Introduction to basketball fundamentals in a fun, engaging environment."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$150/month"
                    schedule="Saturdays, 9:00 AM - 10:30 AM"
                  />
                  <ProgramCard
                    title="Junior Ballers (Ages 10-12)"
                    description="Building on fundamentals with introduction to team concepts and competitive play."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$175/month"
                    schedule="Saturdays, 11:00 AM - 12:30 PM"
                  />
                  <ProgramCard
                    title="Youth Skills Clinic"
                    description="Focused skill development sessions for young players looking to improve specific aspects of their game."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$120/month"
                    schedule="Wednesdays, 4:30 PM - 6:00 PM"
                  />
                </div>
              </div>

              {/* Elite Programs */}
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Elite Training Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Elite Development (Ages 13-15)"
                    description="Advanced skill training and competitive play for serious middle school players."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$225/month"
                    schedule="Mon & Wed, 5:00 PM - 7:00 PM"
                  />
                  <ProgramCard
                    title="High School Prep (Ages 16-18)"
                    description="Comprehensive training for high school players looking to compete at a high level."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$250/month"
                    schedule="Tue & Thu, 5:00 PM - 7:00 PM"
                  />
                  <ProgramCard
                    title="College Prospect Program"
                    description="Specialized training for players with college basketball aspirations."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$300/month"
                    schedule="Fri, 5:00 PM - 7:30 PM & Sat, 1:00 PM - 3:30 PM"
                  />
                </div>
              </div>

              {/* Camps */}
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Basketball Camps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Summer Skills Camp"
                    description="Week-long intensive camp focusing on all aspects of basketball development."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$350/week"
                    schedule="Multiple weeks available June-August"
                  />
                  <ProgramCard
                    title="Holiday Camp"
                    description="3-day camp during school breaks to keep skills sharp and have fun."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$175"
                    schedule="Winter & Spring Break"
                  />
                  <ProgramCard
                    title="Elite Shooting Camp"
                    description="Specialized camp focused on shooting mechanics and game-situation shooting."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$225"
                    schedule="Select weekends throughout the year"
                  />
                </div>
              </div>

              {/* Adult Programs */}
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Adult Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Adult Skills & Drills"
                    description="Skill development and conditioning for adult players of all levels."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$150/month"
                    schedule="Tuesdays, 7:30 PM - 9:00 PM"
                  />
                  <ProgramCard
                    title="Competitive League"
                    description="Organized league play with referees, stats, and playoffs."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$200/season"
                    schedule="Sunday afternoons"
                  />
                  <ProgramCard
                    title="Open Gym"
                    description="Supervised open gym time for pick-up games and practice."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$10/session or $75/month"
                    schedule="Friday evenings, 7:00 PM - 10:00 PM"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="youth">
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">
                  Youth Development Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Rookie Stars (Ages 7-9)"
                    description="Introduction to basketball fundamentals in a fun, engaging environment."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$150/month"
                    schedule="Saturdays, 9:00 AM - 10:30 AM"
                  />
                  <ProgramCard
                    title="Junior Ballers (Ages 10-12)"
                    description="Building on fundamentals with introduction to team concepts and competitive play."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$175/month"
                    schedule="Saturdays, 11:00 AM - 12:30 PM"
                  />
                  <ProgramCard
                    title="Youth Skills Clinic"
                    description="Focused skill development sessions for young players looking to improve specific aspects of their game."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$120/month"
                    schedule="Wednesdays, 4:30 PM - 6:00 PM"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Similar TabsContent for other tabs */}
            <TabsContent value="elite">
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Elite Training Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Elite Development (Ages 13-15)"
                    description="Advanced skill training and competitive play for serious middle school players."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$225/month"
                    schedule="Mon & Wed, 5:00 PM - 7:00 PM"
                  />
                  <ProgramCard
                    title="High School Prep (Ages 16-18)"
                    description="Comprehensive training for high school players looking to compete at a high level."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$250/month"
                    schedule="Tue & Thu, 5:00 PM - 7:00 PM"
                  />
                  <ProgramCard
                    title="College Prospect Program"
                    description="Specialized training for players with college basketball aspirations."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$300/month"
                    schedule="Fri, 5:00 PM - 7:30 PM & Sat, 1:00 PM - 3:30 PM"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="camps">
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Basketball Camps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Summer Skills Camp"
                    description="Week-long intensive camp focusing on all aspects of basketball development."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$350/week"
                    schedule="Multiple weeks available June-August"
                  />
                  <ProgramCard
                    title="Holiday Camp"
                    description="3-day camp during school breaks to keep skills sharp and have fun."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$175"
                    schedule="Winter & Spring Break"
                  />
                  <ProgramCard
                    title="Elite Shooting Camp"
                    description="Specialized camp focused on shooting mechanics and game-situation shooting."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$225"
                    schedule="Select weekends throughout the year"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="adult">
              <div>
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Adult Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProgramCard
                    title="Adult Skills & Drills"
                    description="Skill development and conditioning for adult players of all levels."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$150/month"
                    schedule="Tuesdays, 7:30 PM - 9:00 PM"
                  />
                  <ProgramCard
                    title="Competitive League"
                    description="Organized league play with referees, stats, and playoffs."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$200/season"
                    schedule="Sunday afternoons"
                  />
                  <ProgramCard
                    title="Open Gym"
                    description="Supervised open gym time for pick-up games and practice."
                    imageSrc="/placeholder.svg?height=400&width=600"
                    price="$10/session or $75/month"
                    schedule="Friday evenings, 7:00 PM - 10:00 PM"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join a Program?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register today to secure your spot in one of our popular training programs. Space is limited!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Register Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

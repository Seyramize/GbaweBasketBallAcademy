import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  // Sample gallery data
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=600&width=800`,
    alt: `Basketball academy photo ${i + 1}`,
    category: i % 3 === 0 ? "training" : i % 3 === 1 ? "games" : "events",
  }))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Basketball gallery"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore moments from our training sessions, games, and special events.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">All Photos</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="games">Games</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative group overflow-hidden rounded-lg shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <p className="text-sm uppercase tracking-wider">{photo.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos
                  .filter((photo) => photo.category === "training")
                  .map((photo) => (
                    <div key={photo.id} className="relative group overflow-hidden rounded-lg shadow-md">
                      <div className="aspect-square relative">
                        <Image
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <p className="text-sm uppercase tracking-wider">{photo.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="games">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos
                  .filter((photo) => photo.category === "games")
                  .map((photo) => (
                    <div key={photo.id} className="relative group overflow-hidden rounded-lg shadow-md">
                      <div className="aspect-square relative">
                        <Image
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <p className="text-sm uppercase tracking-wider">{photo.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos
                  .filter((photo) => photo.category === "events")
                  .map((photo) => (
                    <div key={photo.id} className="relative group overflow-hidden rounded-lg shadow-md">
                      <div className="aspect-square relative">
                        <Image
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <p className="text-sm uppercase tracking-wider">{photo.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch highlights from our training sessions, games, and player development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Video thumbnail ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/80 p-4">
                      <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Training Session Highlights</h3>
                  <p className="text-gray-600 text-sm">Elite skills development with Coach Johnson</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

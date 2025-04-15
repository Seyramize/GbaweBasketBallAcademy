"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBasketIcon as Basketball, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Basketball className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Gbawe Basketball Academy</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  pathname === item.href ? "text-orange-500" : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/register">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Register</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-3 p-4 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium py-2 transition-colors hover:text-orange-500",
                  pathname === item.href ? "text-orange-500" : "text-gray-600",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

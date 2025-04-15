import Link from "next/link"
import {
  ShoppingBasketIcon as Basketball,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Basketball className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Gbawe Basketball Academy</span>
            </Link>
            <p className="mb-6">
              Professional basketball training for players of all ages and skill levels. Develop your skills, build
              confidence, and reach your full potential.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 hover:text-orange-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="hover:text-orange-500 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="hover:text-orange-500 transition-colors">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-orange-500 transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <span>123 Basketball Court, Springfield, IL 62701</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>info@basketballacademy.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest news, events, and special offers.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Gbawe Basketball Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm hover:text-orange-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

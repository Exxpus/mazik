'use client'

import { ShoppingBag, Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-800 bg-gray-950/90 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-extrabold text-green-400">
                NEON FASHION
              </a>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                Women
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                Men
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                Accessories
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                About
              </a>
            </nav>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-green-400 transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 z-40 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200">
              Women
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200">
              Men
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200">
              Accessories
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-200">
              About
            </a>
          </div>
        </div>
      )}
    </>
  )
}
'use client'

import { useState, useEffect, useCallback } from "react"
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { FeaturedProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import '@/styles/home-page.css'

export function HomePage() {
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }, [])

  const handleResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    setIsClient(true)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    handleResize() // Инициализация размера окна
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [handleMouseMove, handleResize])

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      {/* Animated background */}
      {isClient && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-gray-950 to-blue-900/10" />
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => {
              const size = Math.random() * 2 + 1
              const initialX = Math.random() * 100
              const initialY = Math.random() * 100
              const dotX = (initialX / 100) * windowSize.width
              const dotY = (initialY / 100) * windowSize.height
              const distance = calculateDistance(mousePosition.x, mousePosition.y, dotX, dotY)
              const maxDistance = 150
              const movement = Math.max(0, 1 - distance / maxDistance)

              return (
                <div
                  key={i}
                  className="absolute rounded-full mix-blend-screen"
                  style={{
                    left: `calc(${initialX}% + ${movement * (mousePosition.x - dotX) * 0.1}px)`,
                    top: `calc(${initialY}% + ${movement * (mousePosition.y - dotY) * 0.1}px)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: `hsl(${Math.random() * 60 + 120}, 100%, 50%)`,
                    opacity: 0.3,
                    transition: 'left 0.3s ease-out, top 0.3s ease-out',
                  }}
                />
              )
            })}
          </div>
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:pr-8">
            <HeroSection />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <FeaturedProducts />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
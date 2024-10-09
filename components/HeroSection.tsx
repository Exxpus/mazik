import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/neon-grid.svg')] opacity-20 animate-pulse"></div>
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
            <span className="block text-gradient-animate">Illuminate Your Style</span>
            <span className="block text-gradient-animate">with Neon Fashion</span>  
          </h1>
          <p className="mt-6 text-xl text-gray-300 animate-fade-in-up animation-delay-200">
            Discover our electrifying new collection that combines cutting-edge design with unparalleled comfort.
          </p>
          <div className="mt-10 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-green-500 text-gray-900 hover:bg-green-400 transition-colors duration-200 shadow-neon"
              aria-label="Explore Collection"
            >
              Explore Collection <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
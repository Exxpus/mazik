import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gray-950/90 border-t border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-green-400">NEON FASHION</h2>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
        <Separator className="my-4 bg-gray-800" />
        <p className="text-center text-xs text-gray-400">
          &copy; 2023 NEON FASHION. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
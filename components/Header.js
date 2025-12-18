'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Leaf, Sparkles } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Giardinaggio', href: '#giardinaggio' },
    { name: 'Fitosanitari', href: '#fitosanitari' },
    { name: 'Cura Piante', href: '#cura-piante' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/98 backdrop-blur-lg shadow-lg py-2'
        : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
    }`}>
      <nav className="container-custom px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className={`relative transition-all duration-500 ${
              scrolled ? 'w-10 h-10' : 'w-12 h-12'
            } gradient-primary rounded-full flex items-center justify-center shadow-glow-hover`}>
              <Leaf className={`text-white transition-all duration-500 ${
                scrolled ? 'w-5 h-5' : 'w-6 h-6'
              }`} />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <span className={`font-bold text-primary-700 transition-all duration-500 ${
              scrolled ? 'text-xl' : 'text-2xl'
            }`}>
              Giardini e Servizi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-primary-600 transition-all font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contatti"
              className="gradient-primary text-white px-6 py-2.5 rounded-full hover:shadow-glow transition-all transform hover:scale-105 font-semibold"
            >
              Preventivo Gratuito
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-all"
          >
            {isOpen ? <X className="w-6 h-6 text-primary-600" /> : <Menu className="w-6 h-6 text-primary-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-100 pt-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary-600 transition-all font-medium p-2 rounded-lg hover:bg-primary-50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setIsOpen(false)}
                className="gradient-primary text-white px-6 py-3 rounded-full hover:shadow-glow transition-all text-center font-semibold transform hover:scale-105"
              >
                Preventivo Gratuito
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

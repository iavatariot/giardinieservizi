'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react'

const slides = [
  {
    title: 'Giardinaggio Professionale',
    subtitle: 'Potatura, squadratura siepi e manutenzione del verde con attrezzature professionali',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&h=900&fit=crop',
  },
  {
    title: 'Trattamenti Fitosanitari Certificati',
    subtitle: 'Disinfestazione zanzare, derattizzazione e controllo scarafaggi con prodotti sicuri',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1600&h=900&fit=crop',
  },
  {
    title: 'Cura Specializzata delle Piante',
    subtitle: 'Trattamenti contro fumigine, cocciniglia e altre patologie. Risultati garantiti',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=900&fit=crop',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const handleSlideChange = (newSlide) => {
    setIsTransitioning(true)
    setCurrentSlide(newSlide)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[2000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              <div className={`transition-all duration-1000 ${
                index === currentSlide && !isTransitioning
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 drop-shadow-lg font-light max-w-3xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#contatti"
                    className="gradient-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-glow transition-all transform hover:scale-105 shadow-2xl"
                  >
                    Richiedi un Preventivo
                  </a>
                  <a
                    href="#giardinaggio"
                    className="glass-effect text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    Scopri i Servizi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 glass-effect hover:bg-white/30 text-white p-4 rounded-full transition-all z-10 group"
        aria-label="Slide precedente"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 glass-effect hover:bg-white/30 text-white p-4 rounded-full transition-all z-10 group"
        aria-label="Slide successiva"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-12'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <a href="#giardinaggio" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scorri per esplorare</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

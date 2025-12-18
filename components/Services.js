'use client'
import { Sprout, Scissors, Droplets, Heart, TreeDeciduous, Flower2, Sparkle } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Equilibrio Vegetale',
    description: 'Trattamenti specializzati per riportare le tue piante ai livelli ottimali. Non semplice disinfezione, ma un riequilibrio completo per la salute delle piante.',
    color: 'bg-red-50 text-red-600',
    gradient: 'from-red-500 to-pink-600',
  },
  {
    icon: Scissors,
    title: 'Potatura Professionale',
    description: 'Potatura tecnica e artistica per alberi, siepi e arbusti. Curiamo ogni dettaglio per garantire crescita sana e forme armoniose.',
    color: 'bg-blue-50 text-blue-600',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: TreeDeciduous,
    title: 'Manutenzione Giardini',
    description: 'Servizio completo di manutenzione ordinaria e straordinaria. Rasatura prati, pulizia aiuole e cura costante del verde.',
    color: 'bg-green-50 text-green-600',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Sprout,
    title: 'Progettazione Verde',
    description: 'Progettazione e realizzazione di nuovi spazi verdi. Trasformiamo le tue idee in giardini da sogno.',
    color: 'bg-yellow-50 text-yellow-600',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Droplets,
    title: 'Sistemi di Irrigazione',
    description: 'Installazione e manutenzione di impianti di irrigazione automatici per un risparmio idrico intelligente.',
    color: 'bg-cyan-50 text-cyan-600',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Flower2,
    title: 'Cura Stagionale',
    description: 'Trattamenti specifici per ogni stagione. Preparazione del terreno, concimazione e protezione dal freddo.',
    color: 'bg-purple-50 text-purple-600',
    gradient: 'from-purple-500 to-pink-600',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Sparkle className="w-4 h-4" />
            <span className="text-sm font-semibold">SERVIZI PREMIUM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluzioni complete per la cura e manutenzione del tuo spazio verde
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">Scopri di più</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contatti"
            className="inline-block gradient-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-glow transition-all transform hover:scale-105 shadow-xl"
          >
            Richiedi una Consulenza Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}

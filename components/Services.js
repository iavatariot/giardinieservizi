'use client'
import { Sprout, Scissors, Droplets, Heart, TreeDeciduous, Flower2 } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Equilibrio Vegetale',
    description: 'Trattamenti specializzati per riportare le tue piante ai livelli ottimali. Non semplice disinfezione, ma un riequilibrio completo per la salute delle piante.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Scissors,
    title: 'Potatura Professionale',
    description: 'Potatura tecnica e artistica per alberi, siepi e arbusti. Curiamo ogni dettaglio per garantire crescita sana e forme armoniose.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: TreeDeciduous,
    title: 'Manutenzione Giardini',
    description: 'Servizio completo di manutenzione ordinaria e straordinaria. Rasatura prati, pulizia aiuole e cura costante del verde.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Sprout,
    title: 'Progettazione Verde',
    description: 'Progettazione e realizzazione di nuovi spazi verdi. Trasformiamo le tue idee in giardini da sogno.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Droplets,
    title: 'Sistemi di Irrigazione',
    description: 'Installazione e manutenzione di impianti di irrigazione automatici per un risparmio idrico intelligente.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Flower2,
    title: 'Cura Stagionale',
    description: 'Trattamenti specifici per ogni stagione. Preparazione del terreno, concimazione e protezione dal freddo.',
    color: 'bg-purple-50 text-purple-600',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contatti"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            Scopri di Più
          </a>
        </div>
      </div>
    </section>
  )
}

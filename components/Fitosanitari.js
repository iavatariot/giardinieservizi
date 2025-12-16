'use client'
import { Bug, MousePointerClick, Rat } from 'lucide-react'

const services = [
  {
    icon: Bug,
    title: 'Disinfestazione Zanzare',
    description: 'Trattamenti mirati contro zanzare tigre e comuni. Interventi larvicidi e adulticidi per eliminare il problema alla radice. Prodotti certificati a basso impatto ambientale.',
    color: 'bg-red-50 text-red-600',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&h=600&fit=crop',
  },
  {
    icon: Rat,
    title: 'Derattizzazione',
    description: 'Sistemi professionali di controllo e allontanamento roditori. Esche sicure, trappole meccaniche e monitoraggio costante. Interventi certificati per abitazioni e aziende.',
    color: 'bg-orange-50 text-orange-600',
    image: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=800&h=600&fit=crop',
  },
  {
    icon: MousePointerClick,
    title: 'Disinfestazione Scarafaggi',
    description: 'Eliminazione completa di blatte e scarafaggi con trattamenti gel, spray e nebulizzazione. Garanzia di risultato e follow-up programmato.',
    color: 'bg-amber-50 text-amber-600',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
  },
]

export default function Fitosanitari() {
  return (
    <section id="fitosanitari" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trattamenti Fitosanitari
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interventi professionali di disinfestazione e derattizzazione. 
            Prodotti certificati e personale abilitato per garantire sicurezza ed efficacia.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Prodotti certificati e sicuri
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Personale specializzato
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                      Garanzia di risultato
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Info Box */}
        <div className="bg-primary-50 rounded-3xl p-8 md:p-12 border-2 border-primary-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trattamenti Certificati e Sicuri
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Utilizziamo solo prodotti registrati al Ministero della Salute e approvati per uso civile. 
              Ogni intervento è eseguito da tecnici abilitati con rilascio di certificazione.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Sicuro</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
                <div className="text-gray-700 font-medium">Intervento rapido</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">✓</div>
                <div className="text-gray-700 font-medium">Certificato</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contatti"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            Richiedi un Sopralluogo Gratuito
          </a>
        </div>
      </div>
    </section>
  )
}

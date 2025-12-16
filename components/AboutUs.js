'use client'
import { Award, Users, Clock, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clienti Soddisfatti' },
  { icon: Clock, value: '15+', label: 'Anni di Esperienza' },
  { icon: Award, value: '100%', label: 'Professionalità' },
  { icon: ThumbsUp, value: '1000+', label: 'Progetti Completati' },
]

export default function AboutUs() {
  return (
    <section id="chi-siamo" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chi Siamo
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong className="text-primary-600">Giardini e Servizi</strong> è
              un'azienda specializzata nella cura e manutenzione del verde con oltre
              15 anni di esperienza nel settore del giardinaggio professionale.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Il nostro team di professionisti qualificati offre servizi completi che spaziano 
              dalla potatura su cestello elevatore alla squadratura di siepi, dall'abbattimento 
              controllato di alberi alla piantumazione di essenze ornamentali.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ci occupiamo anche di <strong>trattamenti fitosanitari</strong> certificati: 
              disinfestazione zanzare, derattizzazione e controllo degli scarafaggi con prodotti 
              sicuri e approvati.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              La nostra specialità è la <strong>cura delle piante</strong>: interveniamo 
              contro fumigine, cocciniglia e altre patologie, riportando le piante al loro 
              splendore naturale. Lavoriamo con passione e dedizione per trasformare ogni 
              spazio verde in un ambiente rigoglioso e curato.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=1000&fit=crop"
                alt="Team al lavoro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

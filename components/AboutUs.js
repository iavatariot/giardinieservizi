'use client'
import { Award, Users, Clock, ThumbsUp, Sparkles } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clienti Soddisfatti', gradient: 'from-blue-500 to-cyan-600' },
  { icon: Clock, value: '15+', label: 'Anni di Esperienza', gradient: 'from-purple-500 to-pink-600' },
  { icon: Award, value: '100%', label: 'Professionalità', gradient: 'from-yellow-500 to-orange-600' },
  { icon: ThumbsUp, value: '1000+', label: 'Progetti Completati', gradient: 'from-green-500 to-emerald-600' },
]

export default function AboutUs() {
  return (
    <section id="chi-siamo" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">LA NOSTRA STORIA</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Chi Siamo
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-primary-600 text-xl">Giardini e Servizi</strong> è
                un'azienda specializzata nella cura e manutenzione del verde con oltre
                15 anni di esperienza nel settore del giardinaggio professionale.
              </p>
              <p>
                Il nostro team di professionisti qualificati offre servizi completi che spaziano
                dalla potatura su cestello elevatore alla squadratura di siepi, dall'abbattimento
                controllato di alberi alla piantumazione di essenze ornamentali.
              </p>
              <p>
                Ci occupiamo anche di <strong className="text-primary-600">trattamenti fitosanitari</strong> certificati:
                disinfestazione zanzare, derattizzazione e controllo degli scarafaggi con prodotti
                sicuri e approvati.
              </p>
              <p>
                La nostra specialità è la <strong className="text-primary-600">cura delle piante</strong>: interveniamo
                contro fumigine, cocciniglia e altre patologie, riportando le piante al loro
                splendore naturale. Lavoriamo con passione e dedizione per trasformare ogni
                spazio verde in un ambiente rigoglioso e curato.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`bg-gradient-to-br ${stat.gradient} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1 text-center">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 text-center font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=1000&fit=crop"
                alt="Team al lavoro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Certificati e Qualificati</div>
                    <div className="text-white/90">Professionisti del verde dal 2009</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl -z-10 transform rotate-12"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-green-200 to-green-300 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

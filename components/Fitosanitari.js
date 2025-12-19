'use client'
import { Bug, MousePointerClick, Rat, Shield, CheckCircle, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Bug,
    title: 'Disinfestazione Zanzare',
    description: 'Trattamenti mirati contro zanzare tigre e comuni. Interventi larvicidi e adulticidi per eliminare il problema alla radice. Prodotti certificati a basso impatto ambientale.',
    color: 'bg-red-50 text-red-600',
    gradient: 'from-red-500 to-pink-600',
    image: '/disinfestazionezanzare.png',
  },
  {
    icon: Rat,
    title: 'Derattizzazione',
    description: 'Sistemi professionali di controllo e allontanamento roditori. Esche sicure, trappole meccaniche e monitoraggio costante. Interventi certificati per abitazioni e aziende.',
    color: 'bg-orange-50 text-orange-600',
    gradient: 'from-orange-500 to-red-600',
    image: '/derattizzazione.png',
  },
  {
    icon: MousePointerClick,
    title: 'Disinfestazione Scarafaggi',
    description: 'Eliminazione completa di blatte e scarafaggi con trattamenti gel, spray e nebulizzazione. Garanzia di risultato e follow-up programmato.',
    color: 'bg-amber-50 text-amber-600',
    gradient: 'from-amber-500 to-orange-600',
    image: '/disinfestazione scarafaggi.png',
  },
]

export default function Fitosanitari() {
  return (
    <section id="fitosanitari" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">SICUREZZA CERTIFICATA</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Trattamenti Fitosanitari
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interventi professionali di disinfestazione e derattizzazione con prodotti certificati
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="absolute top-4 right-4">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      Prodotti certificati e sicuri
                    </div>
                    <div className="flex items-center text-sm text-gray-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      Personale specializzato
                    </div>
                    <div className="flex items-center text-sm text-gray-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      Garanzia di risultato
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Info Box */}
        <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-3xl p-12 md:p-16 border-2 border-red-200 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full filter blur-3xl opacity-30"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-700">QUALITÀ GARANTITA</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trattamenti Certificati e Sicuri
            </h3>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Utilizziamo solo prodotti registrati al Ministero della Salute e approvati per uso civile.
              Ogni intervento è eseguito da tecnici abilitati con rilascio di certificazione.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-3">100%</div>
                <div className="text-gray-700 font-semibold text-lg">Sicuro</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3">24h</div>
                <div className="text-gray-700 font-semibold text-lg">Intervento Rapido</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-3">✓</div>
                <div className="text-gray-700 font-semibold text-lg">Certificato</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contatti"
            className="inline-block gradient-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-glow transition-all transform hover:scale-105 shadow-xl"
          >
            Richiedi un Sopralluogo Gratuito
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'
import { Mail, Phone, MapPin, Clock, MessageCircle, Sparkles } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contatti" className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">PARLIAMO DEL TUO PROGETTO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contattaci Ora
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siamo pronti ad ascoltare le tue esigenze e trasformare il tuo spazio verde in un capolavoro
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-primary-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Phone className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                Chiamaci
              </h3>
              <a href="tel:3342471947" className="text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors block mb-3">
                334 247 1947
              </a>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Lun-Sab: 8:00 - 18:00</span>
              </p>
              <p className="text-gray-700 font-semibold">Contatta Valerio</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">Rispondiamo immediatamente alle chiamate durante l'orario lavorativo</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-primary-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Mail className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                Scrivici
              </h3>
              <a href="mailto:info@giardinieservizi.it" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors break-all block mb-3">
                info@giardinieservizi.it
              </a>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Risposta entro 24h</span>
              </p>
              <p className="text-gray-700 font-semibold">Email Ufficiale</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">Invia la tua richiesta dettagliata e ti risponderemo con un preventivo personalizzato</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-primary-300 relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <MapPin className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Zona Operativa
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-3">
                Italia
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Sopralluoghi gratuiti</span>
              </p>
              <p className="text-gray-700 font-semibold">Servizio completo</p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">Operiamo su tutto il territorio nazionale con attrezzature professionali</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop"
              alt="Giardino professionale"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-900/95"></div>
          </div>

          <div className="relative z-10 px-8 py-16 md:py-24 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto a Trasformare il Tuo Giardino?
            </h3>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Contattaci oggi stesso per un sopralluogo gratuito e un preventivo personalizzato senza impegno
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:3342471947"
                className="bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Chiama Subito</span>
              </a>
              <a
                href="mailto:info@giardinieservizi.it"
                className="glass-effect text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Invia Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">24h</div>
            <p className="text-gray-600">Risposta Garantita</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-gray-600">Clienti Soddisfatti</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">+15</div>
            <p className="text-gray-600">Anni di Esperienza</p>
          </div>
        </div>
      </div>
    </section>
  )
}

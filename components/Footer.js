'use client'
import { Leaf, Mail, Phone, MapPin, ArrowUp, Award } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 rounded-full filter blur-3xl"></div>

      {/* Main Footer */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Giardini e Servizi
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Specialisti nella cura e manutenzione del verde. Il tuo giardino in mani esperte.
            </p>
            <div className="flex items-center gap-2 text-primary-400">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">15+ Anni di Esperienza</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Link Rapidi</h3>
            <ul className="space-y-3">
              {['Home', 'Giardinaggio', 'Fitosanitari', 'Cura Piante', 'Chi Siamo', 'Contatti'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">I Nostri Servizi</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Potatura e Abbattimenti
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Squadratura Siepi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Disinfestazione Zanzare
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Derattizzazione
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Cura Piante
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                Manutenzione Giardini
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contattaci</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:3342471947" className="flex items-start space-x-3 text-gray-400 hover:text-primary-400 transition-colors group">
                  <div className="bg-primary-600/20 p-2.5 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">334 247 1947</span>
                    <span className="text-sm">Valerio - Lun-Sab 8:00-18:00</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@giardinieservizi.it" className="flex items-start space-x-3 text-gray-400 hover:text-primary-400 transition-colors group">
                  <div className="bg-primary-600/20 p-2.5 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white break-all">info@giardinieservizi.it</span>
                    <span className="text-sm">Risposta entro 24h</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <div className="bg-primary-600/20 p-2.5 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Italia</span>
                  <span className="text-sm">Servizio nazionale</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-white font-semibold">Giardini e Servizi</span>. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#cookie" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
            <span className="text-gray-600">•</span>
            <p className="text-gray-400">P.IVA: XXXXXXXXXXX</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Torna su"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}

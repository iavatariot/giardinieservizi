'use client'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Giardini e Servizi</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Specialisti nella cura e manutenzione del verde. Il tuo giardino in mani esperte.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#giardinaggio" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Giardinaggio
                </a>
              </li>
              <li>
                <a href="#fitosanitari" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Fitosanitari
                </a>
              </li>
              <li>
                <a href="#cura-piante" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cura Piante
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Potatura e Abbattimenti</li>
              <li>Squadratura Siepi</li>
              <li>Disinfestazione Zanzare</li>
              <li>Derattizzazione</li>
              <li>Cura Piante</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <span className="text-gray-400 block">334 247 1947</span>
                  <span className="text-gray-500 text-sm">Valerio</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">info@giardinieservizi.it</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">Italia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom px-4 md:px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Giardini e Servizi. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#cookie" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
              <p className="text-gray-400">P.IVA: XXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

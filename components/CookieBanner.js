'use client'
import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(minimalConsent))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-100 p-2 rounded-lg">
              <Cookie className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Informativa Cookie
            </h2>
          </div>
          <button
            onClick={rejectAll}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            <>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Utilizziamo i cookie per migliorare la tua esperienza di navigazione su{' '}
                <strong>giardinieservizi.it</strong>. I cookie ci aiutano a personalizzare
                i contenuti e a comprendere come viene utilizzato il nostro sito.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Cookie utilizzati:
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>
                      <strong>Cookie necessari:</strong> Essenziali per il funzionamento del sito
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>
                      <strong>Cookie analitici:</strong> Per comprendere come utilizzi il sito
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>
                      <strong>Cookie di marketing:</strong> Per mostrarti contenuti pertinenti
                    </span>
                  </li>
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all"
                >
                  Accetta Tutti
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Personalizza
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Rifiuta Tutti
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Scegli quali cookie vuoi abilitare:
              </p>

              {/* Cookie Settings */}
              <div className="space-y-4 mb-6">
                {/* Necessary */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cookie Necessari
                    </h4>
                    <p className="text-sm text-gray-600">
                      Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5 text-primary-600 rounded"
                    />
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cookie Analitici
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ci aiutano a capire come i visitatori interagiscono con il sito.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="w-5 h-5 text-primary-600 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cookie di Marketing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Utilizzati per mostrare annunci più pertinenti ai tuoi interessi.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="w-5 h-5 text-primary-600 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptSelected}
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all"
                >
                  Conferma Selezione
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Indietro
                </button>
              </div>
            </>
          )}

          {/* Footer Links */}
          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-sm text-gray-500">
              Per maggiori informazioni consulta la nostra{' '}
              <a href="#privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </a>{' '}
              e la{' '}
              <a href="#cookie" className="text-primary-600 hover:underline">
                Cookie Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

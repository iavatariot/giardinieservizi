'use client'
import { Droplets, Bug, ArrowRight } from 'lucide-react'

const treatments = [
  {
    icon: Droplets,
    title: 'Fumigine',
    description: 'Trattamento specifico contro la fumaggine, patina nera che si sviluppa sulle foglie causata da funghi. Riportiamo le piante alla loro lucentezza naturale.',
    symptoms: [
      'Foglie ricoperte da patina nera',
      'Ridotta capacità fotosintetica',
      'Aspetto opaco e sporco',
    ],
    solution: 'Trattamento con prodotti specifici anti-fungini e rimozione degli insetti produttori di melata (afidi e cocciniglie).',
  },
  {
    icon: Bug,
    title: 'Cocciniglia',
    description: 'Eliminazione completa di cocciniglie cotonose, a scudetto e farinose. Interventi mirati per liberare le piante da questi parassiti dannosi.',
    symptoms: [
      'Presenza di insetti bianchi o marroni',
      'Secrezioni appiccicose (melata)',
      'Deperimento generale della pianta',
    ],
    solution: 'Trattamenti sistemici e di contatto, rimozione manuale degli insetti, applicazione di oli minerali.',
  },
]

const beforeAfter = [
  {
    title: 'Trattamento Fumigine',
    before: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop&sat=-50',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop',
    description: 'Pianta completamente liberata dalla patina nera',
  },
  {
    title: 'Eliminazione Cocciniglia',
    before: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop&sat=-50',
    after: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop',
    description: 'Foglie rigogliose e prive di parassiti',
  },
]

export default function CuraPiante() {
  return (
    <section id="cura-piante" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cura delle Piante
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trattamenti specializzati per restituire salute e vigore alle tue piante. 
            Interventi mirati contro patologie e parassiti.
          </p>
        </div>

        {/* Treatments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-xl border border-primary-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-600 p-4 rounded-2xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Sintomi da riconoscere:
                  </h4>
                  <ul className="space-y-2">
                    {treatment.symptoms.map((symptom, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="bg-white rounded-xl p-4 border border-primary-200">
                  <h4 className="font-bold text-primary-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    La nostra soluzione:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {treatment.solution}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Before/After Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              I Risultati dei Nostri Trattamenti
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guarda la differenza prima e dopo i nostri interventi specializzati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfter.map((item, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 text-center">
                  {item.title}
                </h4>
                
                <div className="relative">
                  {/* Before */}
                  <div className="mb-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={item.before}
                        alt="Prima del trattamento"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        PRIMA
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-4">
                    <div className="bg-primary-600 p-3 rounded-full">
                      <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={item.after}
                        alt="Dopo il trattamento"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        DOPO
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-600 italic mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Il Nostro Processo di Cura
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Sopralluogo</h4>
              <p className="text-sm text-gray-600">Analisi dettagliata della pianta e identificazione del problema</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Diagnosi</h4>
              <p className="text-sm text-gray-600">Individuazione precisa di patologie e parassiti</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Trattamento</h4>
              <p className="text-sm text-gray-600">Applicazione di prodotti specifici e certificati</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Follow-up</h4>
              <p className="text-sm text-gray-600">Monitoraggio costante e interventi di mantenimento</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contatti"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            Richiedi una Diagnosi Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}

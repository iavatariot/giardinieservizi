'use client'
import { Scissors, Trees, TreeDeciduous, Trash2, Sprout, Flower2 } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Potatura su Cestello Elevatore',
    description: 'Potatura professionale in quota con attrezzature certificate per raggiungere anche le chiome più alte in totale sicurezza.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
  },
  {
    icon: TreeDeciduous,
    title: 'Squadratura Siepi',
    description: 'Taglio e modellatura di siepi con forme geometriche perfette: rotonde, rettangolari, squadrate. Precisione millimetrica.',
    image: 'https://images.unsplash.com/photo-1599629954294-ea1110f6d6e6?w=800&h=600&fit=crop',
  },
  {
    icon: Trees,
    title: 'Potatura Alberi ad Alto Fusto',
    description: 'Potatura specializzata di alberi ornamentali e da frutto ad alto fusto con tecniche di tree climbing certificate.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
  },
  {
    icon: TreeDeciduous,
    title: 'Abbattimenti',
    description: 'Abbattimento controllato di alberi pericolosi o malati con rimozione completa di ceppi e radici.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop',
  },
  {
    icon: Scissors,
    title: 'Decespugliazione',
    description: 'Pulizia e rimozione di erbacce, rovi e vegetazione infestante. Recupero terreni incolti e bordi stradali.',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&h=600&fit=crop',
  },
  {
    icon: Flower2,
    title: 'Piantumazione Piante e Fiori Ornamentali',
    description: 'Progettazione e realizzazione di aiuole fiorite, piantumazione di arbusti, alberi ornamentali e piante da esterno.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
  },
  {
    icon: Trash2,
    title: 'Smaltimento Rifiuti',
    description: 'Servizio completo di raccolta e smaltimento certificato di sfalci, potature e rifiuti vegetali secondo normativa.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
  },
]

export default function Giardinaggio() {
  return (
    <section id="giardinaggio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servizi di Giardinaggio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interventi professionali per la manutenzione e cura del verde. 
            Attrezzature moderne e personale specializzato per ogni esigenza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Gallery Section - Forme Siepi */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Forme e Geometrie per le Tue Siepi
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Realizziamo siepi con forme perfette: rotonde, rettangolari, squadrate, 
              a onde e qualsiasi forma geometrica desiderata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Siepi rotonde"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white text-xl font-bold">Siepi Rotonde</h4>
                <p className="text-white/90 text-sm">Forme sferiche perfette</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1534600738698-d5be35e4d3d6?w=600&h=400&fit=crop"
                alt="Siepi rettangolari"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white text-xl font-bold">Siepi Rettangolari</h4>
                <p className="text-white/90 text-sm">Tagli geometrici precisi</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&h=400&fit=crop"
                alt="Siepi squadrate"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white text-xl font-bold">Siepi Squadrate</h4>
                <p className="text-white/90 text-sm">Linee nette e squadrate</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          
            href="#contatti"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105"
          >
            Richiedi un Preventivo Gratuito
          </a>
        </div>
      </div>
    </section>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Giardini e Servizi - Cura e Manutenzione del Verde',
  description: 'Servizi professionali di giardinaggio, manutenzione del verde e trattamenti specializzati per piante. Riportiamo il tuo giardino in equilibrio perfetto.',
  keywords: 'giardinaggio, manutenzione giardini, cura piante, potatura, trattamenti piante, equilibrio vegetale',
  authors: [{ name: 'Giardini e Servizi' }],
  openGraph: {
    title: 'Giardini e Servizi - Cura e Manutenzione del Verde',
    description: 'Servizi professionali di giardinaggio e cura del verde',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

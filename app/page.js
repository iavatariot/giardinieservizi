import Header from '@/components/Header'
import HeroCarousel from '@/components/HeroCarousel'
import Giardinaggio from '@/components/Giardinaggio'
import Fitosanitari from '@/components/Fitosanitari'
import CuraPiante from '@/components/CuraPiante'
import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <Giardinaggio />
        <Fitosanitari />
        <CuraPiante />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

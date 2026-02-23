import Hero from '@/components/Hero'
import GeneralInfo from '@/components/GeneralInfo'
import VideoTour from '@/components/VideoTour'
import ApartmentDetails from '@/components/ApartmentDetails'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Hero />
      <GeneralInfo />
      <VideoTour />
      <ApartmentDetails />
      <Gallery />
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </main>
  )
}

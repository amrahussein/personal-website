import Image from 'next/image'
import Amrologo from '../components/micros/Amrologo'
import Navigation from '../components/micros/Navigation'

export default function Hero() {
  return (
      <div className='flex justify-center mt-40 text-gray-700'>
        <header>
        <Navigation />

        </header>
        <main>
        Let&apos;s join together for a common goal. 
        </main>
        <Amrologo />
        </div>
  )
}

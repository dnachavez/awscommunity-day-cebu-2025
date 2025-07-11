import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import './globals.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-russo-one',
})

const amazonEmber = localFont({
  src: [
    {
      path: '../../public/fonts/AmazonEmber_Bd.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_RgIt.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_Bd.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmazonEmberDisplay_BdIt.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-amazon-ember',
})

const amazonEmberMono = localFont({
  src: '../../public/fonts/AmazonEmberMono_Bd.ttf',
  variable: '--font-amazon-ember-mono',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${amazonEmber.variable} ${amazonEmberMono.variable} ${russoOne.variable} antialiased`}
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 12 }}>
          <Header />
          <Hero />
          <Tagline />
        </div>
        {/* Arc image layer, layer on top of the page */}
        <div
          className="absolute left-0 w-full flex justify-center pointer-events-none z-10 top-4 md:top-[-10px]"
          style={{
            zIndex: 11,
          }}
        >
          <Image
            src="/arc.png"
            alt="Decorative Arc"
            width={1200}
            height={400}
            style={{
              width: '120%',
              maxWidth: '1200px',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        </div>
        {/* Blur image layer, layer below the arc image */}
        <div
          className="absolute left-0 w-[110%] flex justify-center pointer-events-none z-10 top-40 md:top-[220px]"
          style={{
            zIndex: 10,
          }}
        >
          <Image
            src="/blur.png"
            alt="Blur Layer"
            width={1400}
            height={800}
            style={{
              width: '140%',
              maxWidth: 'none',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none',
              userSelect: 'none',
              position: 'relative',
              left: '30%',
              transform: 'translateX(-30%)',
            }}
          />
        </div>
      </body>
    </html>
  )
}

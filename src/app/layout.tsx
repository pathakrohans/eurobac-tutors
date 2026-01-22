import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import StructuredData from './structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'EB Tutors | European Baccalaureate • Admissions Tests • University Applications',
    template: '%s | EB Tutors',
  },
  description: 'Expert tutoring for European Baccalaureate, admissions tests (SAT, ACT, TOEFL, IELTS), and university applications. Experienced tutors across Europe.',
  keywords: ['European Baccalaureate', 'EB tutoring', 'SAT prep', 'university applications', 'admissions tests', 'tutoring Luxembourg', 'tutoring Brussels'],
  authors: [{ name: 'EB Tutors' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eurobactutors.com',
    siteName: 'EB Tutors',
    title: 'EB Tutors | European Baccalaureate • Admissions Tests • University Applications',
    description: 'Expert tutoring for European Baccalaureate, admissions tests, and university applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EB Tutors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EB Tutors',
    description: 'Expert tutoring for European Baccalaureate, admissions tests, and university applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-display`}>
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

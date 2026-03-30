import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aalborg-elektriker.dk'),
  title: {
    default: 'Elektriker Aalborg | Autoriseret El-installatør | Aalborg El-Service',
    template: '%s | Aalborg El-Service',
  },
  description: 'Autoriseret elektriker i Aalborg og Nordjylland. Eltjek, el-installation, belysning, ladestandere og akut elektriker. Kontakt os for gratis tilbud.',
  keywords: ['elektriker aalborg', 'el-installatør aalborg', 'autoriseret elektriker aalborg', 'akut elektriker aalborg', 'elektriker nordjylland'],
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://aalborg-elektriker.dk',
    siteName: 'Aalborg El-Service',
    title: 'Elektriker Aalborg | Autoriseret El-installatør | Aalborg El-Service',
    description: 'Autoriseret elektriker i Aalborg og Nordjylland. Eltjek, el-installation, belysning, ladestandere og akut elektriker.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://aalborg-elektriker.dk',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk' },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': 'https://aalborg-elektriker.dk/#business',
  name: 'Aalborg El-Service',
  description: 'Autoriseret elektriker i Aalborg og Nordjylland',
  url: 'https://aalborg-elektriker.dk',
  telephone: '',
  email: 'info@aalborg-elektriker.dk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aalborg',
    addressRegion: 'Nordjylland',
    postalCode: '9000',
    addressCountry: 'DK',
  },
  areaServed: [
    { '@type': 'City', name: 'Aalborg' },
    { '@type': 'AdministrativeArea', name: 'Nordjylland' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

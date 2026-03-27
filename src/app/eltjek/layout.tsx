import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eltjek i Aalborg | Professionelt El-eftersyn | Aalborg El-Service',
  description: 'Få et professionelt eltjek i Aalborg fra 2.495 kr. Autoriseret elektriker tjekker din el-installation grundigt. Book dit eltjek i dag – ring 70 XX XX XX.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/eltjek',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/eltjek' },
  },
  openGraph: {
    title: 'Eltjek i Aalborg | Professionelt El-eftersyn fra 2.495 kr.',
    description: 'Autoriseret elektriker i Aalborg udfører grundigt eltjek af din installation. Sikringstavle, HPFI, jordledninger og alle kredsløb. Book i dag.',
    url: 'https://aalborg-elektriker.dk/eltjek',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Aalborg El-Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eltjek i Aalborg | Autoriseret El-eftersyn',
    description: 'Professionelt eltjek fra 2.495 kr. Grundig gennemgang af din el-installation. Book hos Aalborg El-Service.',
  },
}

export default function EltjekLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

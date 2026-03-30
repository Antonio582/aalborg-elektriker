import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akut Elektriker Aalborg | 24/7 Udrykning',
  description: 'Akut elektriker i Aalborg 24/7. Hurtig udrykning ved strømsvigt, kortslutning og el-nødsituationer. Kontakt os – vi er fremme på 1-2 timer.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/akut-elektriker',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/akut-elektriker', 'x-default': 'https://aalborg-elektriker.dk/akut-elektriker' },
  },
  openGraph: {
    title: 'Akut Elektriker Aalborg | 24/7 Nødservice',
    description: 'Akut el-hjælp i Aalborg 24 timer i døgnet. Autoriseret elektriker med 1-2 timers udrykning. Strømsvigt, kortslutning, vandskade – vi er klar.',
    url: 'https://aalborg-elektriker.dk/akut-elektriker',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Nordjysk Elektriker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akut Elektriker Aalborg 24/7 | Kontakt Nu',
    description: 'Akut elektriker i Aalborg med hurtig udrykning. 24/7 vagtordning. Kontakt os – Nordjysk Elektriker.',
  },
}

export default function AkutElektrikerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

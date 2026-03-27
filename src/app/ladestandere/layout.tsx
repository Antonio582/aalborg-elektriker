import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ladestander Aalborg | Elbil Ladestation | Aalborg El-Service',
  description: 'Installation af ladestander til elbil i Aalborg fra 8.500 kr. Gratis besigtigelse, tilskudshjælp og professionel montering. Ring 70 XX XX XX.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/ladestandere',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/ladestandere' },
  },
  openGraph: {
    title: 'Ladestander til Elbil i Aalborg | Installation fra 8.500 kr.',
    description: 'Professionel installation af ladestandere i Aalborg. Alle typer ladebokse. Gratis besigtigelse og tilskudsansøgning. Aalborg El-Service.',
    url: 'https://aalborg-elektriker.dk/ladestandere',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Aalborg El-Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladestander Aalborg | Elbil Ladestation Installation',
    description: 'Installation af ladestander til elbil fra 8.500 kr. Gratis besigtigelse. Kontakt Aalborg El-Service.',
  },
}

export default function LadestandereLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

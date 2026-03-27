import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elektriker Priser Aalborg | Timepris & Faste Priser | Aalborg El-Service',
  description: 'Se priser på elektriker i Aalborg. Timepris fra 449 kr. Faste priser på eltjek, stikkontakter, ladestandere og mere. Gennemsigtige priser uden skjulte gebyrer.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/priser',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/priser' },
  },
  openGraph: {
    title: 'Elektriker Priser i Aalborg | Fra 449 kr./time',
    description: 'Gennemsigtige priser på elektriker i Aalborg. Timepriser, faste priser og priseksempler. Ingen skjulte gebyrer. Aalborg El-Service.',
    url: 'https://aalborg-elektriker.dk/priser',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Aalborg El-Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elektriker Priser Aalborg | Fair & Gennemsigtige',
    description: 'Priser på elektriker i Aalborg fra 449 kr./time. Faste priser på standard el-opgaver. Aalborg El-Service.',
  },
}

export default function PriserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

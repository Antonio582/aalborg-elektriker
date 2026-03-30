import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt Elektriker Aalborg | Gratis Tilbud | Nordjysk Elektriker',
  description: 'Kontakt Nordjysk Elektriker for gratis tilbud på el-arbejde. Kontakt os eller udfyld formularen. Vi svarer inden for 2 timer på hverdage.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/kontakt',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/kontakt' },
  },
  openGraph: {
    title: 'Kontakt Nordjysk Elektriker | Gratis Tilbud på El-arbejde',
    description: 'Kontakt din autoriserede elektriker i Aalborg. Gratis og uforpligtende tilbud. Kontakt os via formularen. Svar inden for 2 timer.',
    url: 'https://aalborg-elektriker.dk/kontakt',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Nordjysk Elektriker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt Elektriker Aalborg | Nordjysk Elektriker',
    description: 'Kontakt Nordjysk Elektriker for gratis tilbud. Kontakt os eller udfyld formularen. Svar inden for 2 timer.',
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

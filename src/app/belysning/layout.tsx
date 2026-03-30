import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Belysning Aalborg | LED & Lysdesign | Nordjysk Elektriker',
  description: 'Professionel belysning i Aalborg – LED-opgradering, spots, havebelysning og erhvervsbelysning. Spar op til 85% på el. Kontakt os for tilbud.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/belysning',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/belysning' },
  },
  openGraph: {
    title: 'Belysning i Aalborg | LED-opgradering & Lysdesign',
    description: 'Autoriseret elektriker i Aalborg installerer moderne belysning. Indendørs, udendørs og erhverv. LED-opgradering med op til 85% besparelse.',
    url: 'https://aalborg-elektriker.dk/belysning',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Nordjysk Elektriker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belysning Aalborg | LED & Professionelt Lysdesign',
    description: 'LED-belysning og lysdesign i Aalborg. Spar op til 85% på el-regningen. Kontakt Nordjysk Elektriker.',
  },
}

export default function BelysningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

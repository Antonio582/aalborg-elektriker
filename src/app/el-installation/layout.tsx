import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El-installation Aalborg | Autoriseret',
  description: 'Komplet el-installation i Aalborg til nybyg, renovering og erhverv. Autoriseret elektriker med 5 års garanti. Få gratis tilbud – kontakt os.',
  alternates: {
    canonical: 'https://aalborg-elektriker.dk/el-installation',
    languages: { 'da-DK': 'https://aalborg-elektriker.dk/el-installation', 'x-default': 'https://aalborg-elektriker.dk/el-installation' },
  },
  openGraph: {
    title: 'El-installation i Aalborg | Nybyg, Renovering & Erhverv',
    description: 'Professionel el-installation fra autoriseret elektriker i Aalborg. Tavleløsninger, stikkontakter, Smart Home og erhvervsinstallation med 5 års garanti.',
    url: 'https://aalborg-elektriker.dk/el-installation',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Nordjysk Elektriker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El-installation Aalborg | Autoriseret Elektriker',
    description: 'Komplet el-installation i Aalborg. Nybyg, renovering, erhverv. 5 års garanti. Få gratis tilbud fra Nordjysk Elektriker.',
  },
}

export default function ElInstallationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

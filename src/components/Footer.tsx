import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-warm-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg font-[family-name:var(--font-jakarta)]">Aalborg El-Service</span>
            </div>
            <p className="text-sm leading-relaxed text-warm-400">
              Din autoriserede elektriker i Aalborg og omegn. Vi leverer kvalitetsarbejde til private og erhverv med fokus på sikkerhed og faglighed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/eltjek" className="hover:text-emerald-400 transition-colors">Eltjek &amp; Sikring</Link></li>
              <li><Link href="/el-installation" className="hover:text-emerald-400 transition-colors">El-installation</Link></li>
              <li><Link href="/belysning" className="hover:text-emerald-400 transition-colors">Belysning</Link></li>
              <li><Link href="/ladestandere" className="hover:text-emerald-400 transition-colors">Ladestandere</Link></li>
              <li><Link href="/akut-elektriker" className="hover:text-emerald-400 transition-colors">Akut Elektriker</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/priser" className="hover:text-emerald-400 transition-colors">Priser</Link></li>
              <li><Link href="/kontakt" className="hover:text-emerald-400 transition-colors">Kontakt os</Link></li>
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Om os</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="/kontakt" className="hover:text-emerald-400 transition-colors">Kontakt os</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@aalborg-elektriker.dk" className="hover:text-emerald-400 transition-colors">info@aalborg-elektriker.dk</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Aalborg og omegn<br />Nordjylland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-500">
          <p>&copy; {new Date().getFullYear()} Aalborg El-Service. Alle rettigheder forbeholdes.</p>
          <p>Autoriseret el-installatørvirksomhed · CVR: XX XX XX XX</p>
        </div>
      </div>
    </footer>
  )
}

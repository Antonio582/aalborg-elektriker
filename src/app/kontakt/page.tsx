'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import FAQ from '@/components/FAQ'
import ArticleSchema from '@/components/ArticleSchema'
import { motion } from 'framer-motion'

const serviceOptions = [
  'Eltjek & sikring',
  'El-installation',
  'Belysning',
  'Ladestander',
  'Akut elektriker',
  'Tavleopgradering',
  'Smart home',
  'Erhvervsinstallation',
  'Andet',
]

const faqs = [
  {
    question: 'Hvor hurtigt svarer I på henvendelser?',
    answer: 'Vi bestræber os på at svare på alle henvendelser inden for 2 timer i normal arbejdstid (man-fre 7-16). Henvendelser modtaget uden for arbejdstid besvares næste hverdag inden kl. 9. Ved akutte problemer anbefaler vi at udfylde kontaktformularen.',
  },
  {
    question: 'Er et tilbud fra jer gratis og uforpligtende?',
    answer: 'Ja, alle vores tilbud er 100% gratis og uforpligtende. Vi kommer gerne forbi og vurderer opgaven på stedet – også det er gratis i Aalborg og nærområdet. Tilbuddet er gyldigt i 30 dage og specificerer alt: arbejdsløn, materialer og eventuelle tillæg.',
  },
  {
    question: 'Kan I komme forbi og give et tilbud på stedet?',
    answer: 'Ja, ved større opgaver som el-installation, tavleopgradering eller ladestander-installation besøger vi dig gratis. Vi gennemgår dine behov, vurderer installationen og sender et detaljeret tilbud inden for 48 timer. Book et besøg via formularen ovenfor eller ring til os.',
  },
  {
    question: 'Hvad er jeres dækningsområde?',
    answer: 'Vi dækker primært Aalborg og nærområdet, herunder Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup og Vodskov. Vi kører også gerne til opgaver i det øvrige Nordjylland – kontakt os for mere info og eventuel kørselsgodtgørelse.',
  },
  {
    question: 'Kan I udføre arbejde i weekenden?',
    answer: 'Ved planlagte opgaver arbejder vi primært mandag-fredag kl. 7-16. I særlige tilfælde kan vi arrangere weekend-arbejde mod tillæg. Akut elektriker-service er tilgængelig 24/7, også i weekender og på helligdage. Se vores prisliste for tillægstakster.',
  },
]

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://haandvaerker-sider-iota.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "aalborg-elektriker.dk" }),
      });
    } catch {
      // Dashboard unreachable — still show success to user
    }
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ArticleSchema
        title="Kontakt Nordjysk Elektriker – Din Autoriserede Elektriker i Aalborg"
        description="Kontakt Nordjysk Elektriker for gratis tilbud på el-arbejde. Kontakt os via formularen. Vi svarer inden for 2 timer."
        url="https://aalborg-elektriker.dk/kontakt"
        datePublished="2024-01-15"
        dateModified="2026-03-27"
      />
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Nordjysk Elektriker',
            description: 'Kontakt Nordjysk Elektriker – din autoriserede elektriker i Aalborg. Kontakt os via formularen.',
            telephone: '',
            email: 'info@aalborg-elektriker.dk',
            url: 'https://aalborg-elektriker.dk/kontakt',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Boulevarden XX',
              addressLocality: 'Aalborg',
              postalCode: '9000',
              addressCountry: 'DK',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '16:00',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://aalborg-elektriker.dk/' },
              { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://aalborg-elektriker.dk/kontakt' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="gradient-mesh py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-200 text-sm mb-6">
                📬 Vi er klar til at hjælpe
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Kontakt Nordjysk Elektriker
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Har du brug for en autoriseret elektriker i Aalborg? Udfyld formularen herunder, ring til os eller send os en email. Vi svarer inden for 2 timer på hverdage. Vores dygtige elektrikere er klar til at hjælpe dig med alle typer el-opgaver i hele Aalborg og Nordjylland.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info Split */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-6">
                  Send os en besked
                </h2>
                <p className="text-warm-500 mb-8">
                  Udfyld formularen herunder, og vi vender tilbage hurtigst muligt. Alle felter markeret med * er påkrævede. Du kan også sende en email til <a href="mailto:info@aalborg-elektriker.dk" className="text-emerald-600 hover:underline font-medium">info@aalborg-elektriker.dk</a>.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass rounded-2xl p-10 text-center"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-emerald-800 font-[family-name:var(--font-jakarta)] mb-2">
                      Tak for din henvendelse!
                    </h3>
                    <p className="text-warm-500">
                      Vi har modtaget din besked og vender tilbage inden for 2 timer i normal arbejdstid. Ved akutte problemer <a href="/kontakt" className="text-emerald-600 hover:underline font-medium">kontakt os</a>.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-warm-700 mb-1.5">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dit fulde navn"
                        className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-800 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="din@email.dk"
                          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-800 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="12 34 56 78"
                          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-800 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-warm-700 mb-1.5">
                        Hvilken service har du brug for? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="">Vælg en service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-1.5">
                        Besked *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Beskriv din opgave eller dit spørgsmål..."
                        className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-800 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors text-lg"
                    >
                      Send besked →
                    </button>
                    <p className="text-xs text-warm-400 text-center">
                      Vi behandler dine data fortroligt. Læs mere i vores privatlivspolitik.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right: Map + Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {/* Google Maps Embed */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.5!2d9.9217!3d57.0488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDAyJzU1LjciTiA5wrA1NScxOC4xIkU!5e0!3m2!1sda!2sdk!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nordjysk Elektriker lokation"
                  />
                </div>

                {/* Company Info */}
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-warm-800 font-[family-name:var(--font-jakarta)] mb-6">
                    Nordjysk Elektriker
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-warm-800">Adresse</div>
                        <div className="text-warm-500 text-sm">Boulevarden XX<br />9000 Aalborg</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-warm-800">Telefon</div>
                        <a href="/kontakt" className="text-emerald-600 hover:underline font-semibold text-lg">Kontakt os</a>
                        <div className="text-warm-400 text-xs mt-0.5">Akut: 24/7 · Kontor: Man-fre 7-16</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-warm-800">Email</div>
                        <a href="mailto:info@aalborg-elektriker.dk" className="text-emerald-600 hover:underline">info@aalborg-elektriker.dk</a>
                        <div className="text-warm-400 text-xs mt-0.5">Vi svarer inden for 2 timer på hverdage</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-warm-800 font-[family-name:var(--font-jakarta)] mb-6">
                    Åbningstider
                  </h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Mandag – Fredag', time: '07:00 – 16:00', highlight: true },
                      { day: 'Lørdag', time: 'Lukket', highlight: false },
                      { day: 'Søndag', time: 'Lukket', highlight: false },
                      { day: 'Akut elektriker', time: '24/7 – hele året', highlight: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-warm-100 last:border-0">
                        <span className="text-warm-700 font-medium">{item.day}</span>
                        <span className={item.highlight ? 'text-emerald-600 font-semibold' : 'text-warm-400'}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100">
                    <p className="text-sm text-red-700 flex items-center gap-2">
                      <span>🚨</span>
                      <span>
                        <strong>Akut el-problem?</strong> {' '}
                        <a href="/kontakt" className="underline font-semibold">Kontakt os</a> – vi er klar 24/7!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-warm-600 leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image src="/images/elektriker-vaerksted.jpg" alt="Professionelt el-værksted – Nordjysk Elektriker er din autoriserede elektriker i Aalborg" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Din lokale elektriker i Aalborg – altid tæt på dig
              </h2>
              <div className="rounded-2xl overflow-hidden my-6">
                <Image src="/images/hero-elektriker-panel.jpg" alt="Autoriseret elektriker i Aalborg klar til at hjælpe med alle typer el-opgaver" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <p>
                Nordjysk Elektriker er din lokale, autoriserede elektriker med kontor centralt i Aalborg. Vi har betjent private og erhvervskunder i Aalborg og hele Nordjylland i over 18 år, og vores team af erfarne elektrikere er klar til at hjælpe dig med alle typer el-opgaver – store som små.
              </p>
              <p>
                Vi er stolte af den personlige service vi leverer til vores kunder. Når du kontakter os, taler du med rigtige mennesker der kender Aalborg og kan give dig konkret rådgivning. Vi tager os tid til at forstå dine behov og finder den bedste løsning inden for dit budget. Det er en af grundene til, at så mange af vores kunder vender tilbage igen og igen.
              </p>
              <p>
                Uanset om du har brug for et <Link href="/eltjek" className="text-emerald-600 hover:underline">eltjek</Link> af din bolig, en ny <Link href="/el-installation" className="text-emerald-600 hover:underline">el-installation</Link>, professionel <Link href="/belysning" className="text-emerald-600 hover:underline">belysning</Link>, en <Link href="/ladestandere" className="text-emerald-600 hover:underline">ladestander til din elbil</Link>, eller akut hjælp midt om natten – vi er klar. Vores <Link href="/priser" className="text-emerald-600 hover:underline">priser</Link> er gennemsigtige, og vi giver altid et skriftligt tilbud før vi starter.
              </p>
              <p>
                Vi dækker hele Aalborg Kommune og nærområdet, herunder Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup og Vodskov. Ved <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">akutte el-problemer</Link> kan vi typisk være fremme inden for 1-2 timer i Aalborg by. For opgaver i det øvrige Nordjylland er du også velkommen til at kontakte os.
              </p>
              <p>
                Vi ser frem til at høre fra dig! Udfyld kontaktformularen ovenfor, ring til os på, eller send en email til info@aalborg-elektriker.dk. Vi lover at vende tilbage hurtigt med et svar eller et tilbud. Ingen opgave er for lille eller for stor for Nordjysk Elektriker.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Spørgsmål om kontakt
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gradient-mesh py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
              Vi glæder os til at hjælpe dig
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Nordjysk Elektriker – din autoriserede elektriker i Aalborg og Nordjylland. Kontakt os via formularen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="/kontakt"
                className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors text-lg"
              >
                📞 Kontakt os
              </a>
              <a
                href="mailto:info@aalborg-elektriker.dk"
                className="inline-block px-8 py-4 bg-emerald-400/20 border border-emerald-400/30 text-white font-semibold rounded-xl hover:bg-emerald-400/30 transition-colors text-lg"
              >
                ✉️ Send email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const steps = [
  { step: '01', title: 'Kontakt & Booking', desc: 'Kontakt os for at booke et eltjek. Vi finder en tid der passer dig – ofte allerede inden for få dage.' },
  { step: '02', title: 'Grundig Gennemgang', desc: 'Vores autoriserede elektriker gennemgår hele din el-installation systematisk. Vi tjekker sikringstavle, jordledninger, fejlstrømsrelæer, stikkontakter og alle kredsløb.' },
  { step: '03', title: 'Måling & Test', desc: 'Vi udfører professionelle målinger af isolationsmodstand, sløjfeimpedans og jordforbindelse. Alt dokumenteres med kaliberet udstyr.' },
  { step: '04', title: 'Rapport & Anbefaling', desc: 'Du modtager en detaljeret rapport med fund, vurderinger og eventuelle anbefalinger til forbedringer. Vi gennemgår rapporten med dig.' },
]

const faqs = [
  {
    question: 'Hvad er et eltjek, og hvorfor har jeg brug for det?',
    answer: 'Et eltjek er en grundig gennemgang af din el-installation udført af en autoriseret elektriker. Det er vigtigt fordi ældre installationer kan have skjulte fejl der udgør brand- eller personfare. Sikkerhedsstyrelsen anbefaler eltjek mindst hvert 10. år, og ved boligkøb er det nærmest et must.',
  },
  {
    question: 'Hvor lang tid tager et eltjek?',
    answer: 'Et standard eltjek i en gennemsnitlig bolig tager typisk 2-3 timer. For større ejendomme eller erhvervslokaler kan det tage længere. Vi aftaler altid tidsrammen på forhånd, så du ved hvad du kan forvente.',
  },
  {
    question: 'Hvad koster et eltjek i Aalborg?',
    answer: 'Et standard eltjek i en lejlighed eller mindre villa starter fra 2.495 kr. ekskl. moms. Prisen afhænger af boligens størrelse og installationens kompleksitet. Kontakt os for et præcist tilbud – det er uforpligtende.',
  },
  {
    question: 'Skal jeg have et eltjek før jeg sælger min bolig?',
    answer: 'Det er ikke lovpligtigt, men det er stærkt anbefalet. En el-rapport giver køber tryghed og kan styrke din forhandlingsposition. Mange ejendomsmæglere i Aalborg anbefaler det som en del af salgsforberedelsen.',
  },
  {
    question: 'Hvad sker der hvis I finder fejl under eltjekket?',
    answer: 'Hvis vi finder fejl, dokumenterer vi dem i rapporten med en vurdering af alvorsgrad. Vi giver dig et tilbud på udbedring, men du er ikke forpligtet til at bruge os. Ved akut farlige fejl informerer vi dig straks og anbefaler øjeblikkelig handling.',
  },
]

export default function EltjekPage() {
  return (
    <>
      <ArticleSchema
        title="Eltjek i Aalborg – Professionelt El-eftersyn af Autoriseret Elektriker"
        description="Få et grundigt eltjek i Aalborg. Vi gennemgår din el-installation, sikringstavle og alle kredsløb. Priser fra 2.495 kr."
        url="https://aalborg-elektriker.dk/eltjek"
        datePublished="2024-02-01"
        dateModified="2026-03-27"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
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
              { '@type': 'ListItem', position: 2, name: 'Eltjek & Sikring', item: 'https://aalborg-elektriker.dk/eltjek' },
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
                🔍 Professionelt eltjek i Aalborg
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Eltjek &amp; Sikringsservice i Aalborg
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Få tryghed med et professionelt eltjek fra en autoriseret elektriker i Aalborg. Vi gennemgår din el-installation grundigt og sikrer, at alt er sikkert og lovligt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                    Book eltjek →
                  </span>
                </MagneticButton>
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                    Kontakt os
                  </span>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What is eltjek */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-6">
                  Hvad indebærer et eltjek?
                </h2>
                <AuthorByline date="1. februar 2024" modified="27. marts 2026" />
                <div className="space-y-4 text-warm-600 leading-relaxed">
                  <p>
                    Et eltjek er en systematisk og grundig gennemgang af hele din el-installation, udført af en autoriseret elektriker. Formålet er at sikre, at din installation lever op til gældende sikkerhedskrav og fungerer korrekt. Det er din garanti for sikkerhed i hjemmet.
                  </p>
                  <p>
                    Hos Nordjysk Elektriker udfører vi eltjek i overensstemmelse med Stærkstrømsbekendtgørelsen og de nyeste standarder. Vores erfarne elektrikere har gennemført tusindvis af eltjek i boliger og erhvervsejendomme i Aalborg, Nørresundby, Hasseris, Gistrup og hele Nordjylland.
                  </p>
                  <p>
                    Under et eltjek kontrollerer vi blandt andet sikringstavlen, fejlstrømsrelæer (HPFI/HFI), jordledninger, stikkontakter, afbrydere, belysningsudtag og alle synlige kabler. Vi måler isolationsmodstand og sløjfeimpedans for at afsløre skjulte fejl, der ikke kan ses med det blotte øje.
                  </p>
                  <p>
                    Et eltjek er særligt vigtigt i ældre boliger, ved boligkøb og -salg, samt efter ombygninger. <Link href="/el-installation" className="text-emerald-600 hover:underline">El-installationer</Link> forældes over tid, og det der var lovligt for 30 år siden, lever muligvis ikke op til dagens sikkerhedskrav.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/eltjek-sikringstavle.jpg" alt="Professionelt eltjek af sikringstavle i Aalborg – autoriseret elektriker kontrollerer kredsløb" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/eltjek-multimeter.jpg" alt="Elektriker bruger multimeter til måling af isolationsmodstand under eltjek i Aalborg" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-emerald-800/5 rounded-2xl p-8 border border-emerald-200/50">
                <h3 className="text-xl font-bold text-emerald-800 mb-6 font-[family-name:var(--font-jakarta)]">Vi tjekker bl.a.:</h3>
                <ul className="space-y-4">
                  {[
                    'Sikringstavle og gruppeafbrydere',
                    'Fejlstrømsrelæer (HPFI/HFI)',
                    'Jordledninger og jordforbindelse',
                    'Isolationsmodstand på alle kredsløb',
                    'Sløjfeimpedans og kortslutningsstrøm',
                    'Stikkontakter og afbrydere',
                    'Belysningsudtag og installationer',
                    'Kabelføring og samlinger',
                    'Overspændingsbeskyttelse',
                    'Mærkninger og dokumentation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">✓</span>
                      <span className="text-warm-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Sådan foregår et eltjek
              </h2>
              <p className="text-warm-500 mt-4">
                Vores proces er enkel og gennemsigtig. Fra booking til rapport – du er informeret hele vejen.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 relative">
                  <div className="text-5xl font-bold text-emerald-500/20 absolute top-4 right-6 font-[family-name:var(--font-jakarta)]">{step.step}</div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-3 font-[family-name:var(--font-jakarta)]">{step.title}</h3>
                  <p className="text-warm-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Eltjek priser i Aalborg
              </h2>
              <p className="text-warm-500 mt-4">
                Gennemsigtige priser på eltjek. Alle priser er ekskl. moms. <Link href="/priser" className="text-emerald-600 hover:underline">Se alle vores priser</Link>.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Lejlighed', price: '2.495', desc: 'Op til 3 værelser. Inkl. rapport med fund og anbefalinger.', features: ['Komplet gennemgang', 'Målerapport', 'Mundtlig gennemgang'] },
              { title: 'Villa / Hus', price: '3.995', desc: 'Standard villa. Inkl. alle rum, garage og udendørs.', features: ['Alt i lejlighed-pakken', 'Udendørs installation', 'Have-el', 'Udvidet rapport'], popular: true },
              { title: 'Erhverv', price: 'Fra 4.995', desc: 'Erhvervslokaler. Pris afhænger af størrelse og kompleksitet.', features: ['Fuld erhvervsgennemgang', 'Lovpligtig dokumentation', 'Prioriteret rapport'] },
            ].map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`glass rounded-2xl p-8 relative ${pkg.popular ? 'ring-2 ring-emerald-500' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                      Mest populær
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-warm-800 font-[family-name:var(--font-jakarta)]">{pkg.title}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">{pkg.price}</span>
                    <span className="text-warm-400 ml-1">kr.</span>
                  </div>
                  <p className="text-warm-500 text-sm mt-2">{pkg.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-warm-600">
                        <span className="text-emerald-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className="block mt-6 text-center py-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition-colors font-medium">
                    Book nu
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* When to get eltjek */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-warm-900 mb-8 font-[family-name:var(--font-jakarta)] text-center">
                Hvornår bør du få lavet et eltjek i Aalborg?
              </h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>
                  Sikkerhedsstyrelsen anbefaler, at du får tjekket din el-installation mindst hvert 10. år. Men der er flere situationer, hvor et eltjek fra en autoriseret elektriker i Aalborg er ekstra vigtigt. Hvis du bor i en bolig bygget før 1980, er sandsynligheden stor for, at installationen ikke lever op til nutidens krav. Ældre installationer med aluminium-ledninger eller uden fejlstrømsrelæ kan udgøre en alvorlig brand- og personfare.
                </p>
                <p>
                  Ved køb eller salg af bolig i Aalborg er et eltjek nærmest et must. For køberen giver det tryghed om installationens tilstand, og for sælgeren kan det styrke tilliden og forhandlingspositionen. Mange ejendomsmæglere i Aalborg C, Hasseris og Nørresundby anbefaler det som standard. Vi tilbyder også <Link href="/el-installation" className="text-emerald-600 hover:underline">komplet el-installation</Link> hvis eltjekket afslører behov for opgradering.
                </p>
                <p>
                  Hvis du oplever problemer som flimrende lys, sikringer der hyppigt springer, varm lugt fra stikkontakter, eller stød ved berøring af el-udstyr, bør du straks <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">kontakte vores akut elektriker i Aalborg</Link>. Det kan være tegn på alvorlige fejl i installationen, herunder jordfejl eller kortslutning. Se også vores <Link href="/priser" className="text-emerald-600 hover:underline">priser på elektriker i Aalborg</Link> for en komplet oversigt over hvad et eltjek koster.
                </p>
                <p>
                  Efter renovering eller ombygning er det også en god idé med et eltjek, da byggearbejde kan påvirke eksisterende installationer. Vi ser desværre ofte tilfælde i Aalborg Øst og Svenstrup, hvor håndværkere utilsigtet har beskadiget kabler under ombygningsarbejde. Har du fået ny <Link href="/belysning" className="text-emerald-600 hover:underline">belysning</Link> eller en <Link href="/ladestandere" className="text-emerald-600 hover:underline">ladestander til elbil</Link> installeret? Så er et opfølgende eltjek en klog investering i sikkerheden.
                </p>
              </div>
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
                Spørgsmål om eltjek i Aalborg
              </h2>
              <p className="text-warm-500 mt-4">
                Her finder du svar på de mest almindelige spørgsmål om eltjek. Kan du ikke finde dit svar? <Link href="/kontakt" className="text-emerald-600 hover:underline">Kontakt vores elektriker i Aalborg</Link> direkte – vi svarer inden for 2 timer på hverdage.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-mesh py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
              Book dit eltjek i Aalborg i dag
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Få tryghed med en professionel gennemgang af din el-installation. Vi kommer til dig i Aalborg, Nørresundby, Hasseris, Gistrup, Svenstrup og Vodskov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors">
                  Book eltjek →
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

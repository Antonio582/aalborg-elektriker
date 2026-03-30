'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'
import TiltCard from '@/components/TiltCard'
import PriceCalculator from '@/components/PriceCalculator'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const chargerTypes = [
  {
    title: 'Basis Ladestander (3.7 kW)',
    desc: 'Perfekt til natopladning. En fuld opladning tager typisk 8-12 timer afhængigt af bilens batteri. Enkel installation med minimal tavleopgradering.',
    features: ['Type 2 stik', 'Op til 16A', 'Vægmonteret', 'Ideel til overnatopladning'],
    price: 'Fra 8.500 kr.',
  },
  {
    title: 'Smart Ladestander (11 kW)',
    desc: 'Den mest populære løsning. Fuld opladning på 4-6 timer. App-styring, tidsplanlægning og energimåling. Kan integreres med solceller.',
    features: ['Type 2 stik', 'Op til 3x16A', 'WiFi/App-styring', 'Energimåling', 'Load balancing'],
    price: 'Fra 14.500 kr.',
    popular: true,
  },
  {
    title: 'DC Hurtiglader (50 kW)',
    desc: 'Til erhverv og boligforeninger med behov for hurtig opladning. 80% opladning på 30-45 minutter. Kræver kraftforsyning.',
    features: ['CCS/CHAdeMO', 'Op til 125A', 'Betalingsmodul', 'Fjernstyring', 'Statistik & rapportering'],
    price: 'Fra 45.000 kr.',
  },
]

const processSteps = [
  { step: '01', title: 'Besigtigelse', desc: 'Vi besøger dig gratis og vurderer tavlekapacitet, kabelvej og optimal placering af ladestanderen. Vi rådgiver om den bedste løsning til dit behov og din bil.' },
  { step: '02', title: 'Tilbud & Tilskud', desc: 'Du modtager et fast tilbud inkl. alt. Vi hjælper med ansøgning om tilskud, hvis du er berettiget, og guider dig gennem processen.' },
  { step: '03', title: 'Installation', desc: 'Vores autoriserede elektrikere installerer ladestanderen professionelt. Typisk tager installationen 3-5 timer afhængigt af kompleksitet.' },
  { step: '04', title: 'Test & Overdragelse', desc: 'Vi tester ladestanderen grundigt, opsætter app-forbindelse og gennemgår funktionerne med dig. Du er klar til at lade!' },
]

const faqs = [
  {
    question: 'Hvilken ladestander passer bedst til min elbil?',
    answer: 'De fleste elbiler i Danmark bruger Type 2-stik og kan lade med op til 11 kW. En 11 kW smart ladestander er den mest populære og fremtidssikrede løsning. Vi rådgiver gerne ud fra din specifikke bil og kørselsmønster – kontakt os for en uforpligtende snak.',
  },
  {
    question: 'Kan jeg få tilskud til en ladestander?',
    answer: 'Der har tidligere været offentlige tilskudsordninger til ladestandere i Danmark. Tilgængeligheden varierer, og nye ordninger kan komme. Vi holder os løbende opdateret og hjælper dig med ansøgningen, hvis der er aktuelle tilskudsmuligheder. Kontakt os for den seneste information.',
  },
  {
    question: 'Kræver en ladestander opgradering af min eltavle?',
    answer: 'Det afhænger af din nuværende installation. Mange boliger har tilstrækkelig kapacitet til en 3.7 kW lader uden ændringer. For en 11 kW lader kan det være nødvendigt at opgradere hovedsikringen eller tilføje en dedikeret gruppe. Vi vurderer det gratis ved besigtigelsen.',
  },
  {
    question: 'Hvor lang tid tager installationen?',
    answer: 'En standard installation tager typisk 3-5 timer. Hvis der er behov for tavleopgradering eller lang kabeltrækning, kan det tage en hel dag. Vi informerer dig altid om den forventede tid i tilbuddet, så du kan planlægge derefter.',
  },
  {
    question: 'Kan ladestanderen bruges med solceller?',
    answer: 'Ja! Mange af de smart ladestandere vi installerer kan integreres med solcelleanlæg, så du lader din bil med grøn energi direkte fra taget. Det kræver en kompatibel ladestander og en inverter der understøtter kommunikation. Vi rådgiver om de bedste kombinationer.',
  },
]

export default function LadestanderePage() {
  return (
    <>
      <ArticleSchema
        title="Ladestander til Elbil i Aalborg – Installation og Rådgivning"
        description="Installation af ladestandere til elbiler i Aalborg fra 8.500 kr. Gratis besigtigelse og tilskudshjælp. Alle typer ladebokse."
        url="https://aalborg-elektriker.dk/ladestandere"
        datePublished="2024-03-01"
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
              { '@type': 'ListItem', position: 2, name: 'Ladestandere', item: 'https://aalborg-elektriker.dk/ladestandere' },
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
                🔋 Ladestander installation i Aalborg
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Ladestandere til elbil i Aalborg
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Professionel installation af ladestandere til private og erhverv i Aalborg og hele Nordjylland. Som autoriseret elektriker i Aalborg hjælper vi med valg af ladeboks, tilskudsansøgning og komplet installation – fra gratis besigtigelse til færdig og testet ladestander.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                    Gratis besigtigelse →
                  </span>
                </MagneticButton>
                <MagneticButton href="#prisberegner">
                  <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                    Beregn pris ↓
                  </span>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Charger Types */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Vælg den rigtige ladestander
              </h2>
              <p className="text-warm-500 mt-4 text-lg">
                Vi installerer alle typer ladestandere til elbiler. Fra simple hjemmeladere til erhvervsløsninger med hurtigladning og betalingsmodul.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chargerTypes.map((type, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <TiltCard className={`glass rounded-2xl p-8 h-full relative ${type.popular ? 'ring-2 ring-emerald-500' : ''}`}>
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                      Mest populær
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-emerald-800 mb-3 font-[family-name:var(--font-jakarta)]">{type.title}</h3>
                  <p className="text-warm-500 leading-relaxed mb-4">{type.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-warm-600">
                        <span className="text-emerald-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">{type.price}</div>
                  <div className="text-xs text-warm-400 mt-1">Ekskl. moms · Inkl. standard installation</div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section id="prisberegner" className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Prisberegner
              </h2>
              <p className="text-warm-500 mt-4">
                Få et hurtigt estimat på din ladestander-installation. Prisen afhænger af type, kabellængde og eventuel tavleopgradering.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <PriceCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Installationsprocessen
              </h2>
              <p className="text-warm-500 mt-4">
                Fra første kontakt til du lader din elbil – hele processen tager typisk 1-2 uger. Vores autoriserede elektrikere i Aalborg sørger for en professionel og tryg oplevelse i hvert trin af forløbet.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
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

      {/* Content section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-warm-600 leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image src="/images/ladestander-elbil.jpg" alt="Elbil tilsluttet ladestander – professionel installation i Aalborg" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Ladestander til elbil i Aalborg – det skal du vide
              </h2>
              <AuthorByline date="1. marts 2024" modified="27. marts 2026" />
              <p>
                Antallet af elbiler i Danmark vokser hastigt. Med det følger behovet for pålidelig hjemmeladning. En dedikeret ladestander er både hurtigere og sikrere end en almindelig stikkontakt. Hos Nordjysk Elektriker har vi installeret hundredvis af ladestandere i Aalborg C, Nørresundby, Hasseris, Aalborg Øst, Gistrup, Svenstrup og Vodskov.
              </p>
              <p>
                Tænk på dit daglige kørselsbehov, når du vælger ladestander. De fleste familier kører 40-60 km dagligt. En 11 kW ladestander genoplader det på blot 1-2 timer. Du starter altid dagen med fuldt batteri – uden at tænke over det. Med en smart ladestander kan du tidsplanlægge opladningen til de billigste timer om natten. Det kan spare dig tusindvis af kroner om året.
              </p>
              <p>
                For boligforeninger og etageejendomme tilbyder vi løsninger med load balancing. Det betyder at flere beboere kan lade samtidig uden at overbelaste installationen. Vi håndterer alt fra kapacitetsberegning til færdig installation med individuel aflæsning. Denne service er særligt populær i Aalborg C og Nørresundby, hvor mange bor i lejligheder med fælles parkering.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/ladestander-skilt.jpg" alt="Ladestander-skiltning ved parkeringsplads i Aalborg – klar til elbil-opladning" width={400} height={300} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/ladestander-station.jpg" alt="Moderne ladestation til elbil installeret af autoriseret elektriker i Aalborg" width={400} height={300} className="w-full h-auto object-cover" />
                </div>
              </div>
              <p>
                Inden vi installerer en ladestander, anbefaler vi altid et <Link href="/eltjek" className="text-emerald-600 hover:underline">grundigt eltjek af din installation</Link> for at sikre at den kan håndtere den ekstra belastning. Vores <Link href="/el-installation" className="text-emerald-600 hover:underline">autoriserede elektrikere</Link> sørger for at installationen overholder alle krav fra Sikkerhedsstyrelsen. Vi giver 5 års garanti på alt arbejde og er altid klar med <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">akut el-hjælp</Link> hvis der opstår problemer. Se vores <Link href="/priser" className="text-emerald-600 hover:underline">komplette prisliste</Link> for en oversigt over ladestander-priser, eller <Link href="/kontakt" className="text-emerald-600 hover:underline">kontakt os</Link> for et skræddersyet tilbud.
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
                Spørgsmål om ladestandere i Aalborg
              </h2>
              <p className="text-warm-500 mt-4">
                Find svar på de mest stillede spørgsmål om ladestander-installation i Aalborg. Har du andre spørgsmål? <Link href="/kontakt" className="text-emerald-600 hover:underline">Kontakt vores elektrikere i Aalborg</Link> – vi hjælper dig gerne med at finde den rigtige løsning til din elbil.
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
              Klar til at lade hjemme i Aalborg?
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Book en gratis besigtigelse hos din elektriker i Aalborg, så finder vi den perfekte ladestander-løsning til dig og din elbil. Vi dækker Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup og Vodskov med professionel ladestander-installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors">
                  Book gratis besigtigelse →
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

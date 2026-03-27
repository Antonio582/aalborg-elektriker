'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'
import TiltCard from '@/components/TiltCard'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const services = [
  {
    title: 'Nybyg El-installation',
    desc: 'Komplet el-installation til nybyggeri. Vi planlægger og udfører hele den elektriske installation fra bunden – tavleløsning, kabelføring, stikkontakter, belysning og smart home.',
    icon: '🏗️',
  },
  {
    title: 'Renovering & Ombygning',
    desc: 'Opdatering af eksisterende el-installationer i forbindelse med renovering. Vi opgraderer din tavle, udskifter gamle ledninger og tilføjer nye kredsløb efter behov.',
    icon: '🔧',
  },
  {
    title: 'Erhvervsinstallation',
    desc: 'Professionelle el-installationer til kontorer, butikker, lagre og produktionslokaler. Vi sikrer at installationen lever op til erhvervskrav og lovgivning.',
    icon: '🏢',
  },
  {
    title: 'Tavle & Sikringer',
    desc: 'Installation og opgradering af sikringstavler. Vi udskifter gamle tavler med moderne gruppetavler med fejlstrømsrelæ og overspændingsbeskyttelse.',
    icon: '⚡',
  },
  {
    title: 'Stikkontakter & Afbrydere',
    desc: 'Montering af nye stikkontakter, afbrydere, dåser og udtag. Vi arbejder med alle mærker og leverer et pænt og professionelt resultat.',
    icon: '🔌',
  },
  {
    title: 'Smart Home & Automation',
    desc: 'Installation af smart home-systemer. Intelligent belysning, automatiske gardiner, termostat-styring og integration med dit eksisterende setup.',
    icon: '📱',
  },
]

const faqs = [
  {
    question: 'Hvor lang tid tager en el-installation ved nybyg?',
    answer: 'Det afhænger af projektets størrelse. En standard villa tager typisk 2-3 uger for el-installationen. Vi koordinerer med øvrige håndværkere og tilpasser tidsplanen efter byggeprojektets fremdrift. Vi laver altid en detaljeret tidsplan som del af tilbuddet.',
  },
  {
    question: 'Kan I opgradere min gamle sikringstavle?',
    answer: 'Ja, det er en af vores mest efterspurgte services. Vi udskifter gamle porcelæns-sikringer og smeltesikringer med moderne automatsikringer og fejlstrømsrelæer. En tavleopgradering øger sikkerheden markant og giver dig bedre overblik over din installation.',
  },
  {
    question: 'Hvad koster det at få installeret en ny stikkontakt?',
    answer: 'Installation af en ny stikkontakt koster typisk 800-1.500 kr. ekskl. moms, afhængigt af placering og om der skal trækkes nye kabler. Tilføjelse af stikkontakt ved eksisterende kabel er billigst. Se vores prisliste for mere info.',
  },
  {
    question: 'Tilbyder I garanti på jeres el-arbejde?',
    answer: 'Ja, vi giver 5 års garanti på alt vores el-arbejde. Det dækker både materialer og arbejdsløn. Som autoriseret installatør hæfter vi for at arbejdet er udført korrekt og i henhold til gældende regler.',
  },
]

export default function ElInstallationPage() {
  return (
    <>
      <ArticleSchema
        title="El-installation i Aalborg – Nybyg, Renovering og Erhverv"
        description="Komplet el-installation i Aalborg fra autoriseret elektriker. Tavleløsninger, stikkontakter, Smart Home. 5 års garanti."
        url="https://aalborg-elektriker.dk/el-installation"
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
              { '@type': 'ListItem', position: 2, name: 'El-installation', item: 'https://aalborg-elektriker.dk/el-installation' },
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
                ⚡ Professionel el-installation
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                El-installation i Aalborg
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Komplet el-installation til nybyg, renovering og erhverv. Aalborg El-Service leverer kvalitetsarbejde med 5 års garanti – fra sikringstavle til Smart Home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                    Få tilbud →
                  </span>
                </MagneticButton>
                <MagneticButton href="/priser">
                  <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                    Se priser
                  </span>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                El-installationer til ethvert behov
              </h2>
              <p className="text-warm-500 mt-4 text-lg">
                Som din autoriserede elektriker i Aalborg dækker vi alle former for el-installation i Aalborg og Nordjylland. Vores elektrikere har erfaring med alt fra små privatopgaver til store erhvervsprojekter. Se vores <Link href="/priser" className="text-emerald-600 hover:underline">gennemsigtige priser</Link> eller <Link href="/kontakt" className="text-emerald-600 hover:underline">kontakt os</Link> for et uforpligtende tilbud.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TiltCard className="glass rounded-2xl p-8 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3 font-[family-name:var(--font-jakarta)]">{service.title}</h3>
                  <p className="text-warm-500 leading-relaxed">{service.desc}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <Image src="/images/el-installation-kabler.jpg" alt="El-installation med professionel kabelføring i bolig i Aalborg – nye kredsløb monteres" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-6">
                  El-installation til nybyg og renovering i Aalborg
                </h2>
                <AuthorByline date="1. februar 2024" modified="27. marts 2026" />
                <div className="space-y-4 text-warm-600 leading-relaxed">
                  <p>
                    Når du bygger nyt eller renoverer din bolig i Aalborg, er el-installationen en af de vigtigste dele af projektet. En korrekt planlagt og udført el-installation sikrer ikke kun din families sikkerhed, men også komfort og fremtidssikring af boligen. Hos Aalborg El-Service har vi over 18 års erfaring med el-installationer i Aalborg, Nørresundby, Hasseris, Aalborg Øst og hele Nordjylland.
                  </p>
                  <p>
                    Vi begynder altid med en grundig planlægning, hvor vi gennemgår dine behov og ønsker. Hvor mange stikkontakter har du brug for? Skal der installeres <Link href="/belysning" className="text-emerald-600 hover:underline">specialbelysning</Link>? Er der behov for <Link href="/ladestandere" className="text-emerald-600 hover:underline">ladestander til elbil</Link>? Skal installationen forberedes til smart home? Vi tænker fremad, så du undgår dyre efterinstallationer.
                  </p>
                  <p>
                    Ved renoveringsprojekter i ældre boliger i eksempelvis Hasseris eller Aalborg C støder vi ofte på forældede installationer med aluminium-ledninger, manglende jordforbindelse eller utilstrækkelige sikringer. Vi sørger for at bringe installationen op til nutidens standarder og sikkerhedskrav, mens vi respekterer boligens karakter og arkitektur.
                  </p>
                  <p>
                    Alle vores el-installationer udføres i overensstemmelse med Stærkstrømsbekendtgørelsen og DS/HD 60364-serien. Vi dokumenterer alt arbejde og udleverer komplet tavledokumentation og installationsattest ved projektets afslutning.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <Image src="/images/el-installation-vaeg.jpg" alt="Ny el-installation i væg under renovering – elektriker i Aalborg monterer ledninger" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-6">
                  Erhvervsinstallation i Nordjylland
                </h2>
                <div className="space-y-4 text-warm-600 leading-relaxed">
                  <p>
                    For erhvervskunder i Aalborg og Nordjylland tilbyder vi skræddersyede el-løsninger. Uanset om du driver en butik i Aalborg C, et kontor i Aalborg Øst, eller et lager i industrikvarteret, har vi erfaringen og ekspertisen til at levere en installation der matcher dine behov.
                  </p>
                  <p>
                    Erhvervsinstallationer stiller særlige krav til kapacitet, sikkerhed og dokumentation. Vi dimensionerer installationen korrekt fra starten, så du undgår kapacitetsproblemer senere. Vores elektrikere er erfarne med trefaseinstallationer, kraftinstallationer, nødbelysning, brandalarmer og alt andet der kræves i erhvervsmiljøer.
                  </p>
                  <p>
                    Vi forstår at nedetid koster penge, og planlægger derfor installationsarbejdet så det generer din drift mindst muligt. Ved behov kan vi arbejde uden for normal arbejdstid for at minimere forstyrrelsen. Inden vi starter, får du et fast tilbud med detaljeret beskrivelse af arbejdet og en realistisk tidsplan.
                  </p>
                  <p>
                    Har du brug for <Link href="/eltjek" className="text-emerald-600 hover:underline">lovpligtigt eltjek</Link> af dine erhvervslokaler? Vi tilbyder også det. Kontakt os for mere information om vores erhvervsservices.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Vores arbejdsproces
              </h2>
              <p className="text-warm-500 mt-4">
                Fra første kontakt til færdigt projekt – en struktureret proces der sikrer kvalitet og kundertilfredshed.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Rådgivning', desc: 'Vi besøger dig, gennemgår dine behov og rådgiver om den bedste løsning. Gratis og uforpligtende.' },
              { num: '2', title: 'Tilbud', desc: 'Du modtager et detaljeret skriftligt tilbud med fast pris, materialeliste og tidsplan.' },
              { num: '3', title: 'Udførelse', desc: 'Vores elektrikere udfører arbejdet professionelt. Vi holder dig orienteret undervejs.' },
              { num: '4', title: 'Aflevering', desc: 'Komplet dokumentation, installationsattest og gennemgang af det udførte arbejde.' },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-warm-800 mb-2 font-[family-name:var(--font-jakarta)]">{step.title}</h3>
                  <p className="text-warm-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional SEO content */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-warm-600 leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-6">
                <Image src="/images/el-udendoers.jpg" alt="Udendørs el-installation i Aalborg – autoriseret elektriker monterer udendørs belysning og stikdåser" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Komplet el-service fra din elektriker i Aalborg
              </h2>
              <p>
                Ud over el-installationer tilbyder Aalborg El-Service en bred vifte af el-services. Vi anbefaler altid et <Link href="/eltjek" className="text-emerald-600 hover:underline">grundigt eltjek</Link> i forbindelse med større installationsprojekter, så vi kan identificere eksisterende fejl og sikre at hele installationen lever op til nutidens krav. Det er særligt vigtigt i ældre boliger i Hasseris, Aalborg C og Nørresundby.
              </p>
              <p>
                Mange af vores kunder i Aalborg kombinerer el-installationer med <Link href="/belysning" className="text-emerald-600 hover:underline">professionel belysning</Link> og <Link href="/ladestandere" className="text-emerald-600 hover:underline">ladestander-installation</Link>. Ved at samle flere opgaver i ét projekt kan vi ofte tilbyde en mere fordelagtig totalpris. Vores <Link href="/priser" className="text-emerald-600 hover:underline">prisliste</Link> giver dig et overblik over standardpriser, men vi giver altid et skræddersyet tilbud tilpasset din specifikke situation.
              </p>
              <p>
                Har du brug for hjælp hurtigt? Vores <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">akut elektriker i Aalborg</Link> er klar 24/7 med hurtig udrykning. Og uanset opgaven kan du altid <Link href="/kontakt" className="text-emerald-600 hover:underline">kontakte os</Link> for en uforpligtende snak om dine behov.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Spørgsmål om el-installation
              </h2>
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
              Har du brug for el-installation?
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Kontakt din elektriker i Aalborg for et uforpligtende tilbud på el-installation. Vi dækker Aalborg C, Nørresundby, Hasseris, Aalborg Øst, Gistrup, Svenstrup og Vodskov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors">
                  Få gratis tilbud →
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

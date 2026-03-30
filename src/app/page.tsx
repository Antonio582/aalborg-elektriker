'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Counter from '@/components/Counter'
import TextScramble from '@/components/TextScramble'
import MagneticButton from '@/components/MagneticButton'
import TiltCard from '@/components/TiltCard'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const services = [
  {
    title: 'Eltjek & Sikring',
    description: 'Grundig gennemgang af din el-installation. Vi tjekker sikringstavle, jordledninger, fejlstrømsrelæer og alle kredsløb for optimal sikkerhed.',
    href: '/eltjek',
    icon: '🔍',
  },
  {
    title: 'El-installation',
    description: 'Komplet el-installation til nybyg, renovering og erhverv. Fra stikkontakter og afbrydere til fulde tavleløsninger.',
    href: '/el-installation',
    icon: '⚡',
  },
  {
    title: 'Belysning',
    description: 'Moderne belysningsløsninger til indendørs og udendørs. LED-opgradering, spotlys, havebelysning og erhvervsbelysning.',
    href: '/belysning',
    icon: '💡',
  },
  {
    title: 'Ladestandere',
    description: 'Installation af ladestandere til elbiler. Vi hjælper med valg af ladeboks, tilskudsansøgning og professionel montering.',
    href: '/ladestandere',
    icon: '🔋',
  },
  {
    title: 'Akut Elektriker',
    description: 'Akut el-hjælp 24/7 i Aalborg og omegn. Strømsvigt, kortslutning, brændt sikring – vi er der hurtigt.',
    href: '/akut-elektriker',
    icon: '🚨',
  },
  {
    title: 'Priser',
    description: 'Gennemsigtige priser uden overraskelser. Se vores timepris og faste priser på standard el-opgaver.',
    href: '/priser',
    icon: '📋',
  },
]

const testimonials = [
  {
    name: 'Lars M.',
    location: 'Hasseris, Aalborg',
    text: 'Fantastisk service! De kom hurtigt og løste problemet med vores sikringstavle på ingen tid. Meget professionelle og ryddede op efter sig. Kan varmt anbefales til alle i Aalborg.',
    rating: 5,
  },
  {
    name: 'Mette K.',
    location: 'Nørresundby',
    text: 'Vi fik installeret ny belysning i hele huset og en ladestander i garagen. Aalborg El-Service gav os et fair tilbud og leverede kvalitetsarbejde fra start til slut.',
    rating: 5,
  },
  {
    name: 'Thomas H.',
    location: 'Aalborg Øst',
    text: 'Brugte dem til et komplet eltjek i vores ældre villa. De fandt flere potentielle sikkerhedsproblemer som vi ikke kendte til. Grundige og ærlige folk.',
    rating: 5,
  },
]

const faqs = [
  {
    question: 'Hvor hurtigt kan I komme ved akut behov?',
    answer: 'Ved akutte el-problemer i Aalborg og nærområdet kan vi typisk være fremme inden for 1-2 timer. Vi har altid en vagtordning klar, så du kan kontakte os 24/7. Akut service dækker hele Aalborg, Nørresundby, Hasseris, Aalborg Øst og omegn.',
  },
  {
    question: 'Er I autoriserede elektrikere?',
    answer: 'Ja, Aalborg El-Service er en fuldt autoriseret el-installatørvirksomhed. Alle vores elektrikere har gyldige certifikater og gennemgår løbende efteruddannelse. Vi følger alle gældende regler og standarder fra Sikkerhedsstyrelsen.',
  },
  {
    question: 'Hvad koster en elektriker i Aalborg?',
    answer: 'Vores timepris for en elektriker i Aalborg er fra 449 kr. ekskl. moms. Vi tilbyder også faste priser på mange standardopgaver som opsætning af stikkontakter, lampeudtag og eltjek. Se vores fulde prisliste eller ring for et uforpligtende tilbud.',
  },
  {
    question: 'Dækker I hele Nordjylland?',
    answer: 'Vi dækker primært Aalborg og omegn, herunder Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup og Vodskov. Vi kører også gerne til opgaver i det øvrige Nordjylland – kontakt os for mere info.',
  },
  {
    question: 'Kan I hjælpe med installation af ladestander til elbil?',
    answer: 'Absolut! Vi er specialiserede i installation af ladestandere til elbiler. Vi hjælper med alt fra valg af den rigtige ladeboks til ansøgning om tilskud og selve installationen. Vi installerer alle mærker og typer af ladestandere.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Article Schema */}
      <ArticleSchema
        title="Elektriker Aalborg – Autoriseret El-installatør i Aalborg og Nordjylland"
        description="Aalborg El-Service er din autoriserede elektriker i Aalborg. Vi tilbyder eltjek, el-installation, belysning, ladestandere og akut elektriker 24/7."
        url="https://aalborg-elektriker.dk/"
        datePublished="2024-01-15"
        dateModified="2026-03-27"
      />
      {/* JSON-LD schemas */}
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
            itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://aalborg-elektriker.dk/' }],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="gradient-mesh min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl float-animation" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-200 text-sm mb-6">
                ⚡ Autoriseret el-installatør i Aalborg
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Din pålidelige{' '}
                <TextScramble
                  texts={['elektriker', 'el-installatør', 'partner']}
                  className="text-emerald-400"
                />{' '}
                i Aalborg
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Professionel el-service til private og erhverv i hele Aalborg og Nordjylland. Fra eltjek og installationer til akut hjælp – vi er altid klar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors text-lg">
                    Få gratis tilbud →
                  </span>
                </MagneticButton>
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-lg">
                    Kontakt os
                  </span>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={2500} suffix="+" label="Projekter udført" />
            <Counter end={18} suffix="+" label="Års erfaring" />
            <Counter end={4} suffix=".9" label="Google anmeldelser" />
            <Counter end={100} suffix="%" label="Autoriseret" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Vores el-services i Aalborg
              </h2>
              <p className="text-warm-500 mt-4 text-lg">
                Fra simple reparationer til komplette el-installationer – vi dækker alle dine behov som autoriseret elektriker i Aalborg og Nordjylland.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 0.1}>
                <Link href={service.href}>
                  <TiltCard className="glass rounded-2xl p-8 h-full hover:shadow-xl transition-shadow group">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-3 group-hover:text-emerald-600 transition-colors font-[family-name:var(--font-jakarta)]">
                      {service.title}
                    </h3>
                    <p className="text-warm-500 leading-relaxed">{service.description}</p>
                    <div className="mt-4 text-emerald-600 font-medium text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Læs mere →
                    </div>
                  </TiltCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
                Hvorfor vælge Aalborg El-Service?
              </h2>
              <p className="text-emerald-200/70 mt-4 text-lg">
                Vi er ikke bare endnu en elektriker. Vi er din langsigtede partner for alt el-arbejde i Aalborg, Nørresundby, Hasseris og hele Nordjylland.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Autoriseret & Certificeret', desc: 'Fuld autorisation fra Sikkerhedsstyrelsen. Alle vores elektrikere er uddannede og certificerede med løbende efteruddannelse.', icon: '✅' },
              { title: 'Hurtig responstid', desc: 'Vi er altid tæt på dig i Aalborg. Ved akutte problemer kan vi typisk være fremme inden for 1-2 timer – også i aftentimer og weekender.', icon: '⏱️' },
              { title: 'Fast pris – ingen overraskelser', desc: 'Vi giver altid et skriftligt tilbud før vi går i gang. Gennemsigtige priser uden skjulte gebyrer. Du ved præcis hvad det koster.', icon: '💰' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass-dark rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-jakarta)]">{item.title}</h3>
                  <p className="text-emerald-200/70 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Det siger vores kunder i Aalborg
              </h2>
              <p className="text-warm-500 mt-4 text-lg">
                Vi er stolte af vores kunders tillid. Læs hvad folk i Aalborg og omegn siger om vores el-service.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-warm-600 leading-relaxed italic mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-warm-800">{t.name}</div>
                    <div className="text-sm text-warm-400">{t.location}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / SEO content */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-warm-600 leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image src="/images/hero-elektriker-panel.jpg" alt="Autoriseret elektriker i Aalborg arbejder på sikringstavle med professionelt værktøj" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Din autoriserede elektriker i Aalborg
              </h2>
              <AuthorByline date="15. januar 2024" modified="27. marts 2026" />
              <p>
                Aalborg El-Service er en lokal, autoriseret el-installatørvirksomhed med over 18 års erfaring i Aalborg og Nordjylland. Vi betjener tusindvis af private og erhvervskunder med alt fra simple reparationer og <Link href="/eltjek" className="text-emerald-600 hover:underline">eltjek</Link> til store <Link href="/el-installation" className="text-emerald-600 hover:underline">el-installationer</Link> og <Link href="/ladestandere" className="text-emerald-600 hover:underline">ladestander-montering</Link>. Vores dygtige team af autoriserede elektrikere kender Aalborg som deres egen baglomme – fra de ældre villakvarterer i Hasseris med karakteristiske murermestervillaer til de moderne parcelhuse i Gistrup og rækkehusene i Svenstrup.
              </p>
              <p>
                Når du vælger os som din elektriker i Aalborg, får du en partner der prioriterer kvalitet, sikkerhed og gennemsigtige <Link href="/priser" className="text-emerald-600 hover:underline">priser</Link>. Alle vores elektrikere er certificerede og gennemgår løbende efteruddannelse, så du altid får den nyeste viden og de bedste løsninger. Vi følger alle krav fra Sikkerhedsstyrelsen og dokumenterer alt arbejde grundigt.
              </p>
              <div className="rounded-2xl overflow-hidden my-6">
                <Image src="/images/elektriker-arbejde.jpg" alt="Elektriker i Aalborg monterer ny stikkontakt i bolig – professionelt og autoriseret el-arbejde" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <p>
                Vi er stolte af at være en del af Aalborg-samfundet og kender området indgående – fra ældre villaer i Hasseris med forældede installationer til nybyggeri i Gistrup og erhvervsejendomme i Aalborg Øst. Uanset opgavens størrelse er vi klar med professionel rådgivning og kvalitetsarbejde. <Link href="/kontakt" className="text-emerald-600 hover:underline">Kontakt os</Link> i dag for et uforpligtende tilbud.
              </p>
              <p>
                Som autoriseret el-installatør følger vi alle gældende regler fra Sikkerhedsstyrelsen og Stærkstrømsbekendtgørelsen. Alle vores elektrikere gennemgår løbende efteruddannelse, og vi dokumenterer alt arbejde grundigt med installationsattester. Det er din garanti for, at el-arbejdet i din bolig eller virksomhed i Aalborg er udført korrekt og sikkert.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 mb-8 font-[family-name:var(--font-jakarta)]">
                Elektriker i Aalborg – vi dækker hele byen og omegn
              </h2>
              <p className="text-warm-500 mb-8 max-w-2xl mx-auto">
                Som lokal elektriker i Aalborg kender vi området indgående og kan hurtigt komme til dig. Vi servicerer både private boliger og erhvervsejendomme i hele Nordjylland. Ved <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">akut behov</Link> er vi typisk fremme inden for 1-2 timer. Vores dækningsområde strækker sig fra centrum af Aalborg til forstæderne og de omkringliggende byer, så du altid har en autoriseret elektriker tæt på.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Aalborg C', 'Aalborg Øst', 'Nørresundby', 'Hasseris', 'Gistrup', 'Svenstrup', 'Vodskov'].map((area) => (
                  <span key={area} className="px-4 py-2 bg-white rounded-full text-emerald-800 text-sm font-medium shadow-sm">
                    {area}
                  </span>
                ))}
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
                Ofte stillede spørgsmål
              </h2>
              <p className="text-warm-500 mt-4">
                Find svar på de mest almindelige spørgsmål om vores el-service i Aalborg. Kan du ikke finde dit svar? <Link href="/kontakt" className="text-emerald-600 hover:underline">Kontakt os direkte</Link>.
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
              Klar til at få løst din el-opgave?
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Kontakt Aalborg El-Service i dag for et uforpligtende tilbud. Vi svarer inden for 2 timer på hverdage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors text-lg">
                  Få gratis tilbud →
                </span>
              </MagneticButton>
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-emerald-400/20 border border-emerald-400/30 text-white font-semibold rounded-xl hover:bg-emerald-400/30 transition-colors text-lg">
                  Kontakt os
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

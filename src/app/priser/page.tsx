'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const hourlyRates = [
  { title: 'Normaltid', time: 'Man-fre kl. 7-16', price: '449', note: 'Standard timepris' },
  { title: 'Aften & weekend', time: 'Kl. 16-23 + lør-søn', price: '649', note: '+ 44% tillæg' },
  { title: 'Akut – normaltid', time: 'Man-fre kl. 7-16', price: '549', note: 'Akut udrykning' },
  { title: 'Akut – aften/weekend', time: 'Kl. 16-23 + lør-søn', price: '849', note: 'Akut uden for normaltid' },
  { title: 'Akut – nat/helligdage', time: 'Kl. 23-7 + helligdage', price: '1.099', note: 'Nat og helligdage' },
]

const fixedPrices = [
  { service: 'Eltjek – lejlighed', price: 'Fra 2.495 kr.', desc: 'Op til 3 værelser. Komplet gennemgang med rapport.' },
  { service: 'Eltjek – villa', price: 'Fra 3.995 kr.', desc: 'Standard villa inkl. garage og udendørs.' },
  { service: 'Eltjek – erhverv', price: 'Fra 4.995 kr.', desc: 'Afhængig af størrelse og kompleksitet.' },
  { service: 'Ny stikkontakt (ved eksist. kabel)', price: 'Fra 800 kr.', desc: 'Montering ved eksisterende kredsløb.' },
  { service: 'Ny stikkontakt (nyt kabel)', price: 'Fra 1.500 kr.', desc: 'Inkl. kabelføring fra tavle.' },
  { service: 'Lampeopsætning – simpel', price: 'Fra 450 kr.', desc: 'Montering af pendel eller loftlampe.' },
  { service: 'Lampeopsætning – kompleks', price: 'Fra 950 kr.', desc: 'Spots, skinne eller tung lampe.' },
  { service: 'Udskiftning af afbryder', price: 'Fra 600 kr.', desc: 'Inkl. ny afbryder og montering.' },
  { service: 'Fejlstrømsrelæ (HPFI)', price: 'Fra 2.200 kr.', desc: 'Levering og installation af HPFI.' },
  { service: 'Sikringsudskiftning', price: 'Fra 350 kr.', desc: 'Udskiftning af defekt automatsikring.' },
  { service: 'Ladestander – basis (3.7 kW)', price: 'Fra 8.500 kr.', desc: 'Inkl. standard installation.' },
  { service: 'Ladestander – smart (11 kW)', price: 'Fra 14.500 kr.', desc: 'Inkl. installation og opsætning.' },
  { service: 'Tavleopgradering', price: 'Fra 8.500 kr.', desc: 'Ny gruppetavle med automatsikringer.' },
  { service: 'Komplet el – nybyg villa', price: 'Fra 85.000 kr.', desc: 'Fuld el-installation, pris afhænger af størrelse.' },
]

const priceFactors = [
  { title: 'Tidspunkt', desc: 'Arbejde uden for normal arbejdstid (aften, weekend, helligdage) koster mere. Planlæg i god tid og book i normaltiden for den bedste pris.', icon: '🕐' },
  { title: 'Materialeforbrug', desc: 'Priser på materialer varierer. Kabler, sikringer, stikkontakter og lampeudtag tillægges efter forbrug. Vi bruger kun kvalitetsmaterialer fra kendte producenter.', icon: '🔌' },
  { title: 'Adgangsforhold', desc: 'Svært tilgængelige installationer – f.eks. i krybekældre, loftsrum eller bag gipsvægge – kan kræve ekstra tid og dermed påvirke prisen.', icon: '🏠' },
  { title: 'Installationens alder', desc: 'Ældre installationer kræver ofte mere arbejde. Aluminium-ledninger, forældede tavler og manglende dokumentation kan forlænge opgaven.', icon: '📅' },
  { title: 'Opgavens kompleksitet', desc: 'Simple udskiftninger er billigst. Fejlfinding, trefaseinstallationer og tavleopgraderinger kræver mere tid og ekspertise.', icon: '⚙️' },
  { title: 'Kabellængde', desc: 'Længere kabeltrækning mellem tavle og installationspunkt øger materialeforbruget og arbejdstiden.', icon: '📏' },
]

const faqs = [
  {
    question: 'Hvad koster en elektriker i Aalborg per time?',
    answer: 'Vores standard timepris i Aalborg er 449 kr. ekskl. moms i normaltiden (man-fre 7-16). Aften og weekend er prisen 649 kr. ekskl. moms. Ved akut udrykning gælder særlige takster fra 549 kr./time. Alle priser er ekskl. moms og materialer.',
  },
  {
    question: 'Er jeres priser inkl. eller ekskl. moms?',
    answer: 'Alle vores priser er ekskl. moms (25%). For privatpersoner skal du altså lægge 25% oveni de opgivne priser. For erhvervskunder med momsfradrag er det prisen du betaler. Vi oplyser altid begge priser i vores tilbud.',
  },
  {
    question: 'Kan I give et fast tilbud?',
    answer: 'Ja, ved de fleste opgaver giver vi et fast skriftligt tilbud, så du ved præcis hvad det koster. Vi besøger dig gratis og uforpligtende for at vurdere opgaven. Faste tilbud gælder i 30 dage og inkluderer alt – arbejdsløn, materialer og oprydning.',
  },
  {
    question: 'Skal jeg betale for kørsel?',
    answer: 'Ved planlagte opgaver i Aalborg og nærområdet er der ingen kørselsafgift. Ved akut udrykning tillægges et fast udkaldstillæg på 395 kr. ekskl. moms. For opgaver uden for Aalborg Kommune aftaler vi eventuel kørselsgodtgørelse på forhånd.',
  },
  {
    question: 'Hvad er forskellen på fast pris og timepris?',
    answer: 'Fast pris er en aftalt totalpris for en defineret opgave – du betaler præcis det aftalte, uanset om det tager kortere eller længere tid. Timepris bruges ved mindre opgaver, fejlfinding eller arbejde hvor omfanget er svært at forudsige. Vi anbefaler altid fast pris ved større projekter.',
  },
  {
    question: 'Tilbyder I finansiering af større el-projekter?',
    answer: 'Vi samarbejder ikke direkte med finansieringsselskaber, men mange af vores kunder finansierer større projekter som tavleopgraderinger, komplet nyinstallation eller ladestander-installation via deres bank eller realkredit. Vi udsteder gerne detaljerede fakturaer til brug for låneansøgning.',
  },
]

export default function PriserPage() {
  return (
    <>
      <ArticleSchema
        title="Elektriker Priser i Aalborg – Gennemsigtige Timepriser og Faste Priser"
        description="Se priser på elektriker i Aalborg. Timepris fra 449 kr. Faste priser på eltjek, stikkontakter, ladestandere og mere."
        url="https://aalborg-elektriker.dk/priser"
        datePublished="2024-01-15"
        dateModified="2026-03-27"
      />
      {/* JSON-LD */}
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
            '@type': 'LocalBusiness',
            name: 'Aalborg El-Service',
            description: 'Priser på elektriker i Aalborg. Gennemsigtige timepriser og faste priser på el-arbejde.',
            telephone: '',
            url: 'https://aalborg-elektriker.dk/priser',
            priceRange: '$$',
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
              { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://aalborg-elektriker.dk/priser' },
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
                📋 Gennemsigtige priser
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Priser på elektriker i Aalborg
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Hos Aalborg El-Service tror vi på gennemsigtige priser uden overraskelser. Her finder du vores timepriser og faste priser på de mest almindelige el-opgaver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                    Få uforpligtende tilbud →
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

      {/* Hourly Rates */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Timepriser for elektriker i Aalborg
              </h2>
            <p className="text-warm-500 mt-4 text-lg">
                Alle priser er ekskl. moms. Materialer tillægges efter forbrug. Som din <Link href="/" className="text-emerald-600 hover:underline">elektriker i Aalborg</Link> tilbyder vi ingen kørselsafgift ved planlagte opgaver i Aalborg by og nærområdet.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hourlyRates.map((rate, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 text-center h-full">
                  <h3 className="text-lg font-bold text-warm-800 font-[family-name:var(--font-jakarta)]">{rate.title}</h3>
                  <p className="text-sm text-warm-400 mt-1">{rate.time}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">{rate.price}</span>
                    <span className="text-warm-400 ml-1">kr./time</span>
                  </div>
                  <p className="text-xs text-warm-400 mt-2">{rate.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Prices */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Faste priser på standard el-opgaver
              </h2>
              <p className="text-warm-500 mt-4">
                Vi tilbyder faste priser på mange standard el-opgaver. Priserne er ekskl. moms og inkluderer arbejdsløn og standard materialer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {fixedPrices.map((item, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.05}>
                <div className="glass rounded-xl p-6 flex items-start justify-between gap-4 h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold text-warm-800 font-[family-name:var(--font-jakarta)]">{item.service}</h3>
                    <p className="text-sm text-warm-500 mt-1">{item.desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-emerald-700 font-[family-name:var(--font-jakarta)] whitespace-nowrap">{item.price}</div>
                    <div className="text-xs text-warm-400">ekskl. moms</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price Factors */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Hvad påvirker prisen på en elektriker?
              </h2>
              <p className="text-warm-500 mt-4 text-lg">
                Prisen på el-arbejde i Aalborg afhænger af flere faktorer. Her er de vigtigste ting der påvirker, hvad din opgave kommer til at koste.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceFactors.map((factor, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="text-3xl mb-4">{factor.icon}</div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2 font-[family-name:var(--font-jakarta)]">{factor.title}</h3>
                  <p className="text-warm-500 leading-relaxed text-sm">{factor.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Price Content */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-warm-600 leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image src="/images/elektriker-arbejde.jpg" alt="Elektriker i Aalborg monterer pære – professionelt el-arbejde til fair priser" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Sådan holder vi priserne fair som elektriker i Aalborg
              </h2>
              <AuthorByline date="15. januar 2024" modified="27. marts 2026" />
              <p>
                Hos Aalborg El-Service er vi stolte af vores gennemsigtige prisstruktur. Vi mener at du som kunde har ret til at vide præcis hvad du betaler for – og hvorfor. Derfor giver vi altid et detaljeret skriftligt tilbud, hvor arbejdsløn, materialer og eventuelle tillæg er tydeligt specificeret. Ingen skjulte gebyrer, ingen overraskelser.
              </p>
              <p>
                Vores timepriser ligger i midten af markedet for autoriserede elektrikere i Aalborg. Vi konkurrerer ikke på at være billigst – vi konkurrerer på at levere den bedste kombination af kvalitet, pålidelighed og fair pris. Billig el-arbejde kan blive dyrt i det lange løb, hvis det ikke udføres korrekt. Vi gør det rigtigt første gang, og det sparer dig for penge og bekymringer.
              </p>
              <div className="rounded-2xl overflow-hidden my-6">
                <Image src="/images/elektriker-vaerksted.jpg" alt="Elektriker-værksted i Aalborg med professionelt udstyr – kvalitetsværktøj til fair priser" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <p>
                For større projekter som <Link href="/el-installation" className="text-emerald-600 hover:underline">komplet el-installation</Link>, <Link href="/ladestandere" className="text-emerald-600 hover:underline">ladestander-installation</Link> eller tavleopgraderinger anbefaler vi altid et fast tilbud. Vi besøger dig gratis og uforpligtende, vurderer opgaven og sender et detaljeret tilbud inden for 48 timer. Faste tilbud gælder i 30 dage.
              </p>
              <p>
                Vi tilbyder også pakkepriser for kunder med flere opgaver. Skal du f.eks. have et <Link href="/eltjek" className="text-emerald-600 hover:underline">eltjek</Link>, nye stikkontakter og opdateret <Link href="/belysning" className="text-emerald-600 hover:underline">belysning</Link> i samme omgang? Så kan vi ofte tilbyde en samlet pris der er mere fordelagtig end at bestille opgaverne enkeltvis. Kontakt os for at høre mere om dine muligheder.
              </p>
              <p>
                Har du brug for en <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">akut elektriker</Link>? Akutte opgaver er dyrere end planlagte opgaver, fordi de kræver omgående handling og ofte falder uden for normal arbejdstid. Men også her er vores priser faste og gennemsigtige – du ved hvad det koster, før vi starter.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-3xl p-10 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Få et præcist tilbud på din opgave
              </h2>
              <p className="text-warm-500 mt-4 text-lg max-w-2xl mx-auto">
                Priserne ovenfor er vejledende for vores elektriker-service i Aalborg. For et præcist tilbud tilpasset din specifikke situation og bolig, kontakt os for en gratis og uforpligtende vurdering. Vi besøger dig gerne i Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup eller Vodskov.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors text-lg">
                    Få gratis tilbud →
                  </span>
                </MagneticButton>
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-warm-100 text-emerald-800 font-semibold rounded-xl hover:bg-warm-200 transition-colors text-lg">
                    Kontakt os
                  </span>
                </MagneticButton>
              </div>
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
                Spørgsmål om priser på elektriker i Aalborg
              </h2>
              <p className="text-warm-500 mt-4">
                Her finder du svar på de mest almindelige spørgsmål om priser for el-arbejde i Aalborg. <Link href="/kontakt" className="text-emerald-600 hover:underline">Kontakt os</Link> for et skræddersyet tilbud.
              </p>
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
              Kvalitetsarbejde til fair priser
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Aalborg El-Service – din autoriserede elektriker i Aalborg med gennemsigtige priser og ingen overraskelser. Vi dækker Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup og Vodskov med professionel el-service til fair priser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors">
                  Kontakt os →
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

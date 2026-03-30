'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'
import TiltCard from '@/components/TiltCard'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const categories = [
  {
    title: 'Indendørs Belysning',
    items: [
      { name: 'Spotlys & Indbygningsspot', desc: 'LED-spots i loft, køkken og badeværelse. Dæmpbare og energieffektive løsninger der passer til enhver indretning.' },
      { name: 'Pendellamper & Lysekroner', desc: 'Professionel opsætning af tunge lamper med korrekt ophæng og sikker tilslutning. Vi håndterer alle typer og størrelser.' },
      { name: 'LED-paneler', desc: 'Moderne LED-paneler til kontor, køkken og stue. Jævnt og blændfrit lys der skaber en behagelig atmosfære.' },
      { name: 'Skabsbelysning', desc: 'Integreret belysning i garderobeskabe, køkkenskabe og reolsystemer. Smart og funktionelt lys præcis hvor du har brug for det.' },
    ],
    icon: '🏠',
  },
  {
    title: 'Udendørs Belysning',
    items: [
      { name: 'Havebelysning', desc: 'Stemningsfuld belysning af have, terrasse og indkørsel. Vejrbestandige løsninger der holder i det nordjyske klima.' },
      { name: 'Facadebelysning', desc: 'Oplysning af husets facade med diskrete væglamper eller dramatisk effektbelysning. Øger både æstetik og sikkerhed.' },
      { name: 'Stibelysning', desc: 'LED-pullerter og nedgravede spots langs stier og indkørsler. Sikker og elegant vejvisning i mørke timer.' },
      { name: 'Sikkerhedsbelysning', desc: 'Bevægelsessensorer og kraftige sikkerhedslys ved indgange og parkeringsområder. Forebyg indbrud og uønsket adgang.' },
    ],
    icon: '🌙',
  },
  {
    title: 'Erhvervsbelysning',
    items: [
      { name: 'Kontorbelysning', desc: 'Ergonomisk belysning til kontormiljøer. Opfylder kravene til arbejdspladsvurdering og DS/EN 12464.' },
      { name: 'Butiksbelysning', desc: 'Professionel belysning der fremhæver varer og skaber en indbydende kundeoplevelse i din butik.' },
      { name: 'Lager & Produktion', desc: 'Kraftig og energieffektiv belysning til haller, lagre og produktionslokaler. Reducerer driftsomkostninger markant.' },
      { name: 'Nødbelysning', desc: 'Lovpligtig nødbelysning og flugtvejsbelysning for erhvervsejendomme. Vi sikrer at du overholder alle krav.' },
    ],
    icon: '🏢',
  },
]

const faqs = [
  {
    question: 'Hvad koster det at skifte til LED-belysning i Aalborg?',
    answer: 'Prisen for LED-opgradering afhænger af antallet af lyskilder og installationstype. En typisk stue med 6-8 indbygningsspots koster fra 4.500-7.000 kr. inkl. materialer og installation. LED-pærer bruger op til 85% mindre strøm end halogenpærer, så investeringen tjener sig hurtigt ind. Kontakt vores elektriker i Aalborg for et præcist tilbud.',
  },
  {
    question: 'Kan I installere dæmpbar belysning?',
    answer: 'Ja, vi installerer dæmpbare LED-løsninger med kompatible dimmere. Det er vigtigt at dimmer og LED-driver matcher, ellers kan der opstå flimmer. Vi sikrer altid den rette kombination og tester funktionen grundigt ved aflevering. Som autoriseret elektriker i Aalborg garanterer vi korrekt installation.',
  },
  {
    question: 'Hvad er fordelene ved LED-belysning?',
    answer: 'LED bruger op til 85% mindre energi end halogenpærer og holder 25-50 gange længere. Derudover afgiver LED minimal varme, er kviksolv-frie, kan dæmpes, og fås i alle farvetemperaturer fra varm til kold hvid. For erhverv i Aalborg reducerer LED også vedligeholdelsesomkostningerne markant.',
  },
  {
    question: 'Tilbyder I belysningsrådgivning i Aalborg?',
    answer: 'Ja, vi tilbyder gratis belysningsrådgivning i forbindelse med større projekter. Vi hjælper med at vælge den rigtige farvetemperatur, lysmængde og placering for at skabe den ønskede stemning. For erhvervskunder i Aalborg sikrer vi at belysningen opfylder DS/EN 12464 krav til arbejdspladsbelysning.',
  },
  {
    question: 'Hvor lang tid tager en belysningsinstallation?',
    answer: 'En standard installation af 6-8 spots i et rum tager typisk 3-5 timer. Større projekter med flere rum, udendørs belysning eller erhvervsinstallationer planlægges individuelt. Vi giver altid en realistisk tidsramme i vores tilbud, og vores elektrikere i Aalborg arbejder effektivt og ryddeligt.',
  },
]

export default function BelysningPage() {
  return (
    <>
      <ArticleSchema
        title="Belysning i Aalborg – LED, Lysdesign og Professionel Installation"
        description="Professionel belysningsinstallation i Aalborg. LED-opgradering, havebelysning, erhvervsbelysning. Spar op til 85% på el."
        url="https://aalborg-elektriker.dk/belysning"
        datePublished="2024-02-15"
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
              { '@type': 'ListItem', position: 2, name: 'Belysning', item: 'https://aalborg-elektriker.dk/belysning' },
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
                Professionel belysning i Aalborg
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Belysningsløsninger fra din elektriker i Aalborg
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/80 mt-6 max-w-2xl leading-relaxed">
                Fra indendørs stemningslys til udendørs sikkerhedsbelysning – Nordjysk Elektriker designer og installerer den perfekte belysning til dit hjem eller erhverv i Aalborg og hele Nordjylland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <MagneticButton href="/kontakt">
                  <span className="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors">
                    Få belysningsforslag →
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

      {/* Intro content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-6">
                  Professionel belysningsinstallation i Aalborg
                </h2>
                <AuthorByline date="15. februar 2024" modified="27. marts 2026" />
                <div className="space-y-4 text-warm-600 leading-relaxed">
                  <p>
                    God belysning handler om mere end bare at kunne se – det handler om at skabe den rigtige atmosfære, øge sikkerheden og reducere energiforbruget. Hos Nordjysk Elektriker er vi specialiserede i professionel belysningsinstallation til private og erhverv i hele Aalborg og Nordjylland. Vores autoriserede elektrikere har mange års erfaring med alt fra simple lampeopsætninger til komplette belysningsprojekter.
                  </p>
                  <p>
                    Uanset om du drømmer om stemningsfuld belysning i stuen, funktionel arbejdsbelysning på køkkenbordet, eller sikkerhedsbelysning i indkørslen, kan vi hjælpe. Vi rådgiver om valg af lyskilder, farvetemperatur, dimmerfunktioner og energieffektive løsninger, der passer præcis til dit behov og din bolig i Aalborg C, Hasseris, Nørresundby, Aalborg Øst eller andre områder.
                  </p>
                  <p>
                    En professionel belysningsplan kan fuldstændig transformere et rum. Vi ser det igen og igen hos vores kunder i Aalborg – den rigtige kombination af direkte og indirekte belysning gør en enorm forskel for rummets udseende og funktionalitet. Og med moderne LED-teknologi kan du opnå fantastiske resultater til en brøkdel af de tidligere energiomkostninger.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/belysning-stue.jpg" alt="Moderne belysningsinstallation i stue i Aalborg med LED-spots og stemningslys" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/belysning-design.jpg" alt="Professionel lysdesign med industriel pendel og LED-belysning installeret af elektriker i Aalborg" width={800} height={500} className="w-full h-auto object-cover" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-emerald-800/5 rounded-2xl p-8 border border-emerald-200/50">
                <h3 className="text-xl font-bold text-emerald-800 mb-6 font-[family-name:var(--font-jakarta)]">Derfor vælger kunder i Aalborg os til belysning</h3>
                <ul className="space-y-4">
                  {[
                    'Gratis belysningsrådgivning ved større projekter',
                    'Autoriserede og erfarne elektrikere',
                    'Korrekt dimensionering og installation',
                    'Dæmpbare løsninger med kompatible dimmere',
                    'Energieffektive LED-opgraderinger',
                    'Udendørs belysning der tåler nordjysk vejr',
                    'Fast pris og ingen skjulte gebyrer',
                    '5 års garanti på alt arbejde',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">✓</span>
                      <span className="text-warm-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/priser" className="text-emerald-600 hover:underline font-medium text-sm">
                    Se vores priser på belysningsinstallation →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={ci} className={`py-20 ${ci % 2 === 1 ? 'bg-warm-100' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <span className="text-4xl">{cat.icon}</span>
                <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">{cat.title}</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <TiltCard className="glass rounded-2xl p-8 h-full">
                    <h3 className="text-lg font-bold text-emerald-800 mb-2 font-[family-name:var(--font-jakarta)]">{item.name}</h3>
                    <p className="text-warm-500 leading-relaxed">{item.desc}</p>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* LED Upgrade */}
      <section className="py-20 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)] mb-6">
                  LED-opgradering i Aalborg – spar op til 85% på el-regningen
                </h2>
                <div className="space-y-4 text-emerald-100/70 leading-relaxed">
                  <p>
                    En af de mest effektive måder at reducere dit elforbrug på er at skifte til LED-belysning. Hos Nordjysk Elektriker hjælper vi private og erhvervskunder i hele Aalborg med at opgradere fra halogen, gløde- og lysstofrør til moderne LED. Det er en investering der typisk tjener sig ind på bare 1-2 år i sparede elomkostninger.
                  </p>
                  <p>
                    LED-teknologien har udviklet sig enormt de seneste år. Moderne LED-pærer giver et varmt og behageligt lys der ikke kan skelnes fra traditionelle lyskilder. De holder 25.000-50.000 timer mod halogenens 2.000 timer, og de fås i alle farvetemperaturer og dæmpbare versioner. Som din <Link href="/" className="text-emerald-400 hover:underline">elektriker i Aalborg</Link> anbefaler vi altid LED til nye installationer.
                  </p>
                  <p>
                    For erhvervskunder i Aalborg kan en LED-opgradering betyde besparelser på titusindvis af kroner om året i elomkostninger. Desuden reduceres vedligeholdelsesbehovet dramatisk, da LED-rør og -paneler sjældent skal udskiftes. Vi har erfaring med opgradering af kontorer, butikker, lagre og produktionshaller i hele Nordjylland, fra Aalborg C til Vodskov og Svenstrup.
                  </p>
                  <p>
                    Kontakt os for en gratis beregning af dit besparelsespotentiale. Vi kan typisk give dig et komplet tilbud inden for 48 timer. Se også vores <Link href="/priser" className="text-emerald-400 hover:underline">prisliste for elektriker i Aalborg</Link> for standardpriser på <Link href="/el-installation" className="text-emerald-400 hover:underline">el-installationer</Link>.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Energibesparelse', value: '85%' },
                  { label: 'Levetid', value: '50.000t' },
                  { label: 'ROI', value: '1-2 år' },
                  { label: 'CO₂ reduktion', value: '75%' },
                ].map((stat, i) => (
                  <div key={i} className="glass-dark rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-400 font-[family-name:var(--font-jakarta)]">{stat.value}</div>
                    <div className="text-sm text-emerald-200/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed content section for SEO */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-warm-600 leading-relaxed">
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image src="/images/belysning-hjem.jpg" alt="Moderne hjem i Aalborg med professionel belysning i køkken og stue – installeret af autoriseret elektriker" width={800} height={500} className="w-full h-auto object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Belysning til bolig og erhverv i Aalborg og Nordjylland
              </h2>
              <p>
                Den rigtige belysning er afgørende for trivsel, produktivitet og sikkerhed – uanset om det drejer sig om et privat hjem i Hasseris, en kontorarbejdsplads i Aalborg C, eller en butik i Nørresundby. Som autoriseret elektriker i Aalborg har vi den faglige viden og erfaring til at designe og installere belysningsløsninger der præcis matcher dine behov.
              </p>
              <p>
                I private boliger ser vi en stigende efterspørgsel på dæmpbar belysning, integrerede LED-spots og stemningslys. Mange husejere i Aalborg Øst, Gistrup og Svenstrup ønsker at modernisere deres belysning i forbindelse med køkken- eller badeværelsesrenoveringer. Her spiller valg af farvetemperatur en afgørende rolle – varm hvid (2700K) er perfekt til opholdsstuer, mens neutral hvid (4000K) er ideel til køkkener og arbejdsområder.
              </p>
              <p>
                Udendørs belysning er et andet område, hvor vi hjælper mange kunder i Aalborg og omegn. En godt oplyst indkørsel og have øger ikke bare æstetikken, men også sikkerheden. Bevægelsessensorer og timer-styret belysning er populære løsninger, der giver lys når du har brug for det, uden unødigt energiforbrug. Vi installerer vejrbestandige armaturer der er bygget til at modstå det nordjyske klima.
              </p>
              <p>
                For erhvervskunder i Aalborg stiller vi gerne med en komplet belysningsplan, der sikrer at belysningen overholder alle lovkrav og standarder. Arbejdspladsvurderinger (APV) stiller specifikke krav til lysniveauer, og vores erfarne elektrikere sikrer at din virksomhed lever op til DS/EN 12464-standarden. Vi har hjulpet kontorer, butikker, lagre og produktionsvirksomheder med at optimere deres belysning – ofte med besparelser på 50-85% i elomkostninger ved skift til LED.
              </p>
              <p>
                Uanset om du har brug for en simpel <Link href="/el-installation" className="text-emerald-600 hover:underline">lampeopsætning</Link>, en komplet LED-opgradering, eller et udendørs belysningsprojekt, er Nordjysk Elektriker dit rigtige valg. Vi tilbyder også <Link href="/eltjek" className="text-emerald-600 hover:underline">eltjek af din eksisterende installation</Link> for at sikre at den kan håndtere ny belysning. Har du brug for hjælp hurtigt? Vores <Link href="/akut-elektriker" className="text-emerald-600 hover:underline">akut elektriker i Aalborg</Link> er klar 24/7.
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
              <h2 className="text-2xl font-bold text-warm-900 mb-4 font-[family-name:var(--font-jakarta)]">
                Belysningsinstallation i hele Aalborg og omegn
              </h2>
              <p className="text-warm-500 mb-6 max-w-2xl mx-auto">
                Vi installerer belysning for private og erhverv i hele Aalborg og Nordjylland. Uanset om du bor i Hasseris, Aalborg Øst, Nørresundby, Gistrup eller Svenstrup – vores elektriker i Aalborg kommer til dig.
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
                Spørgsmål om belysning i Aalborg
              </h2>
              <p className="text-warm-500 mt-4">
                Find svar på de mest almindelige spørgsmål om belysningsinstallation. Kan du ikke finde dit svar? <Link href="/kontakt" className="text-emerald-600 hover:underline">Kontakt os direkte</Link>.
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
              Lad os lyse dit hjem op
            </h2>
            <p className="text-emerald-100/80 mt-4 text-lg max-w-2xl mx-auto">
              Kontakt Nordjysk Elektriker for et uforpligtende belysningsforslag. Vi designer den perfekte løsning til dit hjem eller erhverv i Aalborg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-warm-100 transition-colors">
                  Få belysningsforslag →
                </span>
              </MagneticButton>
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-4 bg-emerald-400/20 border border-emerald-400/30 text-white font-semibold rounded-xl hover:bg-emerald-400/30 transition-colors">
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

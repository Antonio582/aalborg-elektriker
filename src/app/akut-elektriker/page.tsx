'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'
import FAQ from '@/components/FAQ'
import AuthorByline from '@/components/AuthorByline'
import ArticleSchema from '@/components/ArticleSchema'

const emergencyProblems = [
  { title: 'Kortslutning', desc: 'Gnister, røglugt eller pludselig strømafbrydelse kan skyldes kortslutning i installationen. Sluk på hovedafbryderen og ring straks.', icon: '⚡' },
  { title: 'Strømafbrydelse', desc: 'Hvis strømmen pludselig forsvinder i hele eller dele af huset, kan det skyldes en defekt sikring, overbelastning eller fejl i forsyningen.', icon: '🔌' },
  { title: 'Brændt lugt fra el', desc: 'Lugt af brændt plastik eller gummi fra stikkontakter, afbrydere eller tavle er et alvorligt advarselstegn. Sluk straks og kontakt os.', icon: '🔥' },
  { title: 'Vandskadet el-installation', desc: 'Oversvømmelse, sprungne rør eller utæt tag kan bringe vand i kontakt med el-installationen. Rør aldrig ved våde kontakter.', icon: '💧' },
  { title: 'Stød fra el-udstyr', desc: 'Hvis du mærker stød ved berøring af hvidevarer, stikkontakter eller vandrør, er der sandsynligvis en jordfejl. Farligt – ring straks.', icon: '⚠️' },
  { title: 'Sikringer der springer gentagne gange', desc: 'Når den samme sikring springer igen og igen, er der en fejl i kredsløbet der kræver professionel fejlfinding.', icon: '🔧' },
]

const processSteps = [
  { step: '01', title: 'Ring til os', desc: 'Ring 70 XX XX XX – vores vagttelefon er åben 24 timer i døgnet, 7 dage om ugen. Beskriv problemet, så vi kan forberede os.' },
  { step: '02', title: 'Hurtig udrykning', desc: 'Vi sender en autoriseret elektriker til dig. I Aalborg og nærområdet er vi typisk fremme inden for 1-2 timer.' },
  { step: '03', title: 'Fejlfinding & diagnose', desc: 'Vores elektriker lokaliserer fejlen med professionelt måleudstyr og giver dig en klar forklaring på problemet.' },
  { step: '04', title: 'Udbedring på stedet', desc: 'I de fleste tilfælde kan vi løse problemet med det samme. Ved større reparationer aftaler vi en plan og et fast tilbud.' },
]

const faqs = [
  {
    question: 'Hvor hurtigt kan I komme ved en akut situation?',
    answer: 'I Aalborg og nærområdet (Aalborg C, Aalborg Øst, Nørresundby, Hasseris, Gistrup, Svenstrup, Vodskov) kan vi typisk være fremme inden for 1-2 timer. Ved livstruende situationer ring altid 112 først. Vores vagttelefon er åben 24/7 på 70 XX XX XX.',
  },
  {
    question: 'Hvad koster en akut elektriker i Aalborg?',
    answer: 'Akut elektriker-service i normaltiden (man-fre 7-16) koster fra 549 kr./time ekskl. moms. Uden for normal arbejdstid (aften, nat, weekend og helligdage) er prisen fra 849 kr./time ekskl. moms. Der tillægges et udkaldstillæg på 395 kr. Se vores fulde prisliste for mere info.',
  },
  {
    question: 'Hvad skal jeg gøre indtil elektrikeren kommer?',
    answer: 'Sluk på hovedafbryderen hvis det er sikkert. Hold dig væk fra beskadigede kabler, våde kontakter og steder der lugter brændt. Åbn vinduer ved røglugt. Saml husdyr og børn i et sikkert rum. Rør aldrig ved el-installationer med våde hænder. Vent på vores elektriker.',
  },
  {
    question: 'Dækker I også akut service i weekenden?',
    answer: 'Ja, vi tilbyder akut elektriker-service alle ugens dage, hele året rundt – også i weekender, på helligdage og om natten. Vores vagtordning sikrer at der altid er en autoriseret elektriker klar til at rykke ud i Aalborg og omegn.',
  },
  {
    question: 'Kan alle el-problemer løses med det samme?',
    answer: 'De fleste akutte problemer som kortslutning, sikringsudskiftning og simple fejl kan løses på stedet. Ved mere komplekse problemer som udskiftning af tavle eller gennemgribende reparationer laver vi en midlertidig sikring og aftaler en tid for den endelige udbedring.',
  },
  {
    question: 'Er jeres akut-elektrikere autoriserede?',
    answer: 'Ja, alle vores elektrikere – også dem på vagt – er fuldt autoriserede og certificerede. De har erfaring med alle typer akutte el-problemer og medbringer professionelt måle- og reparationsudstyr. Du er i sikre hænder med Aalborg El-Service.',
  },
]

export default function AkutElektrikerPage() {
  return (
    <>
      <ArticleSchema
        title="Akut Elektriker i Aalborg – 24/7 El-nødservice med Hurtig Udrykning"
        description="Akut elektriker i Aalborg 24/7. Hurtig udrykning ved kortslutning, strømsvigt og el-nødsituationer. 1-2 timers responstid."
        url="https://aalborg-elektriker.dk/akut-elektriker"
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
            name: 'Aalborg El-Service – Akut Elektriker',
            description: 'Akut elektriker i Aalborg 24/7. Hurtig udrykning ved kortslutning, strømafbrydelse og andre el-nødsituationer.',
            telephone: '70000000',
            url: 'https://aalborg-elektriker.dk/akut-elektriker',
            areaServed: [
              { '@type': 'City', name: 'Aalborg' },
              { '@type': 'City', name: 'Nørresundby' },
            ],
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
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
              { '@type': 'ListItem', position: 2, name: 'Akut Elektriker', item: 'https://aalborg-elektriker.dk/akut-elektriker' },
            ],
          }),
        }}
      />

      {/* Emergency Hero */}
      <section className="relative bg-warm-900 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-warm-900 to-warm-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="pulse-emergency inline-block px-6 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-semibold mb-8">
                🚨 Akut El-hjælp 24/7
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                Akut elektriker<br />
                <span className="text-red-400">i Aalborg</span>
              </h1>
              <p className="text-lg sm:text-xl text-warm-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                Har du et akut el-problem? Vi er klar 24 timer i døgnet, 7 dage om ugen. Vores autoriserede elektrikere rykker hurtigt ud til dig i Aalborg og omegn.
              </p>
              <div className="mt-10">
                <a
                  href="tel:70000000"
                  className="inline-block pulse-emergency px-10 py-6 bg-red-600 text-white font-bold text-2xl sm:text-3xl rounded-2xl hover:bg-red-700 transition-colors shadow-2xl shadow-red-500/30"
                >
                  📞 Ring nu: 70 XX XX XX
                </a>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-warm-400 text-sm">
                <span className="flex items-center gap-2">✅ Autoriserede elektrikere</span>
                <span className="flex items-center gap-2">⏱️ 1-2 timers udrykning</span>
                <span className="flex items-center gap-2">🕐 Åben 24/7/365</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency Problems */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Typiske akutte el-problemer
              </h2>
              <p className="text-warm-500 mt-4 text-lg">
                Vi håndterer alle former for akutte el-situationer i Aalborg, Nørresundby, Hasseris, Aalborg Øst, Gistrup, Svenstrup og Vodskov. Her er de mest almindelige problemer vi rykker ud til:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyProblems.map((problem, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full border-l-4 border-red-400">
                  <div className="text-3xl mb-4">{problem.icon}</div>
                  <h3 className="text-lg font-bold text-warm-800 mb-2 font-[family-name:var(--font-jakarta)]">{problem.title}</h3>
                  <p className="text-warm-500 leading-relaxed text-sm">{problem.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)]">
                Sådan fungerer vores akutservice
              </h2>
              <p className="text-warm-500 mt-4">
                Fra dit opkald til problemet er løst – vores proces er hurtig, effektiv og gennemsigtig. Du ved altid hvad der sker og hvad det koster.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 relative">
                  <div className="text-5xl font-bold text-red-500/20 absolute top-4 right-6 font-[family-name:var(--font-jakarta)]">{step.step}</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-6">
                  Hvad koster en akut elektriker i Aalborg?
                </h2>
                <AuthorByline date="15. januar 2024" modified="27. marts 2026" />
                <div className="space-y-4 text-warm-600 leading-relaxed">
                  <p>
                    Vi forstår at en akut el-situation er stressende, og det sidste du har brug for er uklare priser. Hos Aalborg El-Service arbejder vi med gennemsigtige priser – du ved altid hvad det koster, før vi går i gang. Vores elektriker informerer dig om prisen inden arbejdet påbegyndes, så der ikke opstår ubehagelige overraskelser.
                  </p>
                  <p>
                    Prisen for akut elektriker-service afhænger af tidspunktet og opgavens omfang. I normal arbejdstid (mandag-fredag kl. 7-16) er timeprisen 549 kr. ekskl. moms. Uden for normal arbejdstid – dvs. aften, nat, weekend og helligdage – er prisen 849 kr. ekskl. moms. Dertil kommer et fast udkaldstillæg på 395 kr., uanset hvornår du ringer.
                  </p>
                  <p>
                    Mange akutte opgaver som udskiftning af defekte sikringer, fejlfinding ved strømafbrydelse eller udbedring af simple kortslutninger kan løses på 1-2 timer. Det betyder at en typisk akut-opgave i normaltiden koster mellem 1.500-2.500 kr. ekskl. moms. For en komplet oversigt over vores priser, se vores <Link href="/priser" className="text-emerald-600 hover:underline">prisliste</Link>.
                  </p>
                  <p>
                    Vi anbefaler altid at du får lavet et <Link href="/eltjek" className="text-emerald-600 hover:underline">grundigt eltjek</Link> efter en akut udbedring, så vi kan sikre at der ikke er underliggende problemer i din <Link href="/el-installation" className="text-emerald-600 hover:underline">el-installation</Link> der kan forårsage fremtidige problemer.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="glass rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-warm-800 font-[family-name:var(--font-jakarta)]">Normaltid</h3>
                      <p className="text-sm text-warm-500">Man-fre kl. 7-16</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">549 kr.</div>
                      <div className="text-xs text-warm-400">pr. time ekskl. moms</div>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-warm-800 font-[family-name:var(--font-jakarta)]">Aften &amp; weekend</h3>
                      <p className="text-sm text-warm-500">Kl. 16-23 + lør-søn</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">849 kr.</div>
                      <div className="text-xs text-warm-400">pr. time ekskl. moms</div>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 bg-red-50/50 border-red-200/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-warm-800 font-[family-name:var(--font-jakarta)]">Nat &amp; helligdage</h3>
                      <p className="text-sm text-warm-500">Kl. 23-7 + helligdage</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600 font-[family-name:var(--font-jakarta)]">1.099 kr.</div>
                      <div className="text-xs text-warm-400">pr. time ekskl. moms</div>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-warm-800 font-[family-name:var(--font-jakarta)]">Udkaldstillæg</h3>
                      <p className="text-sm text-warm-500">Fast pris uanset tidspunkt</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-700 font-[family-name:var(--font-jakarta)]">395 kr.</div>
                      <div className="text-xs text-warm-400">ekskl. moms</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)] mb-6">
                Akut elektriker i hele Aalborg og omegn
              </h2>
              <p className="text-emerald-200/70 text-lg mb-8">
                Vores vagtelektrikere er strategisk placeret i Aalborg-området, så vi altid kan nå frem hurtigt. Vi dækker alle bydele og forstæder i Aalborg Kommune og tilstødende områder i Nordjylland. Uanset om du bor i en lejlighed i Aalborg C, en villa i Hasseris, et rækkehus i Aalborg Øst eller et landhus nær Vodskov – vi er der for dig, når det haster.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {['Aalborg C', 'Aalborg Øst', 'Aalborg SV', 'Nørresundby', 'Hasseris', 'Gistrup', 'Svenstrup', 'Vodskov', 'Klarup', 'Storvorde', 'Vestbjerg', 'Gandrup'].map((area) => (
                  <span key={area} className="px-4 py-2 glass-dark rounded-full text-emerald-200 text-sm font-medium">
                    📍 {area}
                  </span>
                ))}
              </div>
              <p className="text-emerald-200/50 text-sm">
                Typisk responstid: 1-2 timer i Aalborg by · 2-3 timer i omegnen
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/akut-stikkontakt.jpg" alt="Åben stikkontakt med synlige ledninger – akut el-reparation i Aalborg af autoriseret elektriker" width={400} height={300} className="w-full h-auto object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/akut-reparation.jpg" alt="Elektriker reparerer kabler ved akut udrykning i Aalborg – professionelt værktøj og præcist arbejde" width={400} height={300} className="w-full h-auto object-cover" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-warm-900 font-[family-name:var(--font-jakarta)] mb-8 text-center">
                Sikkerhedstips ved akutte el-problemer
              </h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>
                  Når du oplever et akut el-problem, er det vigtigste at beskytte dig selv og din familie. El er farligt, og selv tilsyneladende harmløse situationer kan have alvorlige konsekvenser. Her er hvad du bør gøre – og ikke gøre – mens du venter på vores elektriker.
                </p>
                <p>
                  <strong className="text-warm-800">Sluk hovedafbryderen</strong> hvis det er sikkert at komme til den. Det afbryder al strøm i huset og eliminerer risikoen for yderligere skade. Hovedafbryderen sidder typisk øverst i din sikringstavle. Hvis tavlen er beskadiget, har brændemærker eller lugter, skal du holde dig væk og ringe til os med det samme.
                </p>
                <p>
                  <strong className="text-warm-800">Rør aldrig ved beskadigede installationer</strong> med bare hænder, og slet ikke med våde hænder. Vand og el er en livsfarlig kombination. Hvis der er vand nær el-installationer – f.eks. ved en vandskade eller oversvømmelse – skal du holde afstand og lade en autoriseret elektriker vurdere situationen.
                </p>
                <p>
                  <strong className="text-warm-800">Ved røglugt eller brændt lugt</strong> fra el-installationen skal du åbne vinduer og forlade rummet. Ring 112 hvis der er synlig røg eller flammer. Kontakt derefter os på 70 XX XX XX, så vi kan rykke ud og sikre installationen.
                </p>
                <p>
                  Mange akutte el-problemer kan forebygges med regelmæssige <Link href="/eltjek" className="text-emerald-600 hover:underline">eltjek</Link>. En grundig gennemgang af din installation hvert 5-10 år kan afsløre potentielle problemer, før de bliver farlige. Vores <Link href="/kontakt" className="text-emerald-600 hover:underline">kontaktside</Link> gør det nemt at booke et eltjek eller stille spørgsmål om din installation.
                </p>
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
                Ofte stillede spørgsmål om akut elektriker
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQ items={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-warm-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-warm-900 to-warm-900" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
              Har du et akut el-problem?
            </h2>
            <p className="text-warm-300 mt-4 text-lg max-w-2xl mx-auto">
              Ring nu – vi er klar 24/7 med hurtig udrykning til Aalborg, Nørresundby, Hasseris, Aalborg Øst, Gistrup, Svenstrup og Vodskov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="tel:70000000"
                className="inline-block pulse-emergency px-10 py-5 bg-red-600 text-white font-bold text-xl rounded-2xl hover:bg-red-700 transition-colors shadow-2xl shadow-red-500/30"
              >
                📞 Ring: 70 XX XX XX
              </a>
              <MagneticButton href="/kontakt">
                <span className="inline-block px-8 py-5 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors text-xl">
                  Skriv til os →
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

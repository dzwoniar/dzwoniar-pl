import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import ScrollReveal from '../components/ScrollReveal'

const PORTAL = 'https://anomy-portal-2-0.j-dzwoniarski5.workers.dev'
const ANOMY = 'https://anomy-maskowanie.j-dzwoniarski5.workers.dev'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
)

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden grid-bg">
        <div className="orb" style={{ width: 600, height: 600, top: -220, right: -180, background: 'radial-gradient(circle, #10b981 0%, transparent 70%)', opacity: 0.18 }} />
        <div className="orb" style={{ width: 420, height: 420, bottom: -140, left: -120, background: 'radial-gradient(circle, #059669 0%, transparent 70%)', opacity: 0.15 }} />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full relative z-10">
          <m.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <m.div variants={fadeUp} className="inline-flex items-center gap-2 border border-accent/25 bg-accent/[0.06] text-accent text-xs font-body font-medium uppercase tracking-[0.15em] px-4 py-2 rounded mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t('hero.label')}
            </m.div>

            <m.h1 variants={fadeUp} className="font-display font-extrabold text-warm-white leading-[1.04] tracking-tight" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)' }}>
              {t('hero.name')}
            </m.h1>

            <m.p variants={fadeUp} className="text-lg md:text-xl font-body text-muted leading-relaxed max-w-2xl mt-7">
              {t('hero.title')}
            </m.p>

            <m.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <a href={PORTAL} className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-midnight text-sm font-body font-semibold rounded-md shadow-glow hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300">
                Portal kancelarii
                <Arrow />
              </a>
              <a href={ANOMY} className="inline-flex items-center gap-2 px-7 py-4 border border-accent/40 text-accent text-sm font-body font-medium rounded-md hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-300">
                Maskowanie danych
              </a>
              <Link to="/case-study/my-journey" className="inline-flex items-center px-7 py-4 border border-white/10 text-muted text-sm font-body rounded-md hover:border-white/25 hover:text-warm-white transition-all duration-300">
                {t('hero.cta')}
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Ekosystem — dwie karty produktu */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href={PORTAL} className="group block bg-surface border border-white/5 rounded-xl p-8 md:p-10 shadow-card hover:shadow-glow transition-all duration-500 hover:border-accent/25 hover:-translate-y-1">
                <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent mb-4">Dla kancelarii</p>
                <h2 className="font-display font-bold text-warm-white text-2xl md:text-3xl leading-tight mb-3 group-hover:text-accent transition-colors duration-300">Portal kancelarii</h2>
                <p className="text-muted font-body leading-relaxed">Sprawy, zapotrzebowania i dokumenty klientów w jednym miejscu. Pracownik widzi tylko przypisane sprawy — pod tajemnicę zawodową.</p>
                <span className="inline-flex items-center gap-2 mt-6 text-accent text-sm font-body font-medium">Wejdź do portalu <Arrow /></span>
              </a>

              <a href={ANOMY} className="group block bg-surface border border-white/5 rounded-xl p-8 md:p-10 shadow-card hover:shadow-glow transition-all duration-500 hover:border-accent/25 hover:-translate-y-1">
                <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent mb-4">Narzędzie</p>
                <h2 className="font-display font-bold text-warm-white text-2xl md:text-3xl leading-tight mb-3 group-hover:text-accent transition-colors duration-300">Maskowanie danych</h2>
                <p className="text-muted font-body leading-relaxed">Anonimizacja dokumentów prawnych w przeglądarce — 100% offline. OCR, polska fleksja, zgodność z RODO. Dane nie opuszczają urządzenia.</p>
                <span className="inline-flex items-center gap-2 mt-6 text-accent text-sm font-body font-medium">Otwórz narzędzie <Arrow /></span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study Card */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <Link to="/case-study/my-journey" className="group block bg-surface border border-white/5 rounded-xl p-8 md:p-12 shadow-card hover:shadow-glow transition-all duration-500 hover:border-accent/20">
              <p className="text-xs font-body font-medium uppercase tracking-[0.3em] text-accent mb-4">{t('caseStudy.card.label')}</p>
              <h2 className="font-display font-bold text-warm-white text-2xl md:text-4xl leading-tight mb-4 group-hover:text-accent transition-colors duration-300">{t('caseStudy.card.title')}</h2>
              <p className="text-muted font-body leading-relaxed max-w-2xl">{t('caseStudy.card.description')}</p>
              <div className="flex items-center gap-2 mt-6 text-accent text-sm font-body font-medium">
                <span>{t('hero.cta')}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-warm-white text-3xl md:text-5xl leading-tight mb-6">{t('nav.contact')}</h2>
            <div className="flex flex-col items-center gap-3">
              <a href="mailto:j.dzwoniarski5@gmail.com" className="text-accent font-body hover:underline underline-offset-4">j.dzwoniarski5@gmail.com</a>
              <a href="tel:+48784619597" className="text-muted font-body hover:text-warm-white transition-colors">784-619-597</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </m.div>
  )
}

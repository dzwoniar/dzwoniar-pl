import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import ScrollReveal from '../components/ScrollReveal'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <m.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <m.p variants={fadeUp} className="text-xs font-body font-medium uppercase tracking-[0.3em] text-accent mb-6">
              {t('hero.label')}
            </m.p>

            <m.h1 variants={fadeUp} className="font-display font-medium text-warm-white leading-[0.95]" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
              {t('hero.name')}
            </m.h1>

            <m.div variants={fadeUp} className="h-px w-16 bg-accent mt-8 mb-8" />

            <m.p variants={fadeUp} className="text-lg md:text-xl font-body text-muted leading-relaxed max-w-2xl">
              {t('hero.title')}
            </m.p>

            <m.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/case-study/my-journey"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent text-sm font-body font-medium rounded-lg hover:bg-accent hover:text-midnight transition-all duration-300"
              >
                {t('hero.cta')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="mailto:j.dzwoniarski5@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-white/10 text-muted text-sm font-body font-medium rounded-lg hover:border-white/25 hover:text-warm-white transition-all duration-300"
              >
                {t('hero.contact')}
              </a>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Case Study Card */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <Link to="/case-study/my-journey" className="group block">
              <div className="bg-surface border border-white/5 rounded-xl p-8 md:p-12 shadow-card hover:shadow-glow transition-all duration-500 hover:border-accent/20">
                <p className="text-xs font-body font-medium uppercase tracking-[0.3em] text-accent mb-4">
                  {t('caseStudy.card.label')}
                </p>
                <h2 className="font-display font-normal text-warm-white text-2xl md:text-4xl leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {t('caseStudy.card.title')}
                </h2>
                <p className="text-muted font-body leading-relaxed max-w-2xl">
                  {t('caseStudy.card.description')}
                </p>
                <div className="flex items-center gap-2 mt-6 text-accent text-sm font-body font-medium">
                  <span>{t('hero.cta')}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-3xl md:text-5xl leading-tight mb-6">
              {t('nav.contact')}
            </h2>
            <div className="flex flex-col items-center gap-3">
              <a href="mailto:j.dzwoniarski5@gmail.com" className="text-accent font-body hover:underline underline-offset-4">
                j.dzwoniarski5@gmail.com
              </a>
              <a href="tel:+48784619597" className="text-muted font-body hover:text-warm-white transition-colors">
                784-619-597
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </m.div>
  )
}

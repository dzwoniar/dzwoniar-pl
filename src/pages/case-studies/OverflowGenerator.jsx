import { m } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import ScrollReveal from '../../components/ScrollReveal'
import CaseStudyImage from '../../components/CaseStudyImage'
import MetricCard from '../../components/MetricCard'
import TimelineStep from '../../components/TimelineStep'
import SectionDivider from '../../components/SectionDivider'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function OverflowGenerator() {
  const { t } = useLanguage()

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ===== HERO ===== */}
      <section className="min-h-[85vh] flex items-end relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] via-transparent to-midnight pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pb-20 pt-32 w-full">
          <m.div variants={stagger} initial="hidden" animate="visible">
            <m.p variants={fadeUp} className="text-xs font-body font-medium uppercase tracking-[0.3em] text-accent mb-6">
              {t('overflowCase.card.label')}
            </m.p>
            <m.h1
              variants={fadeUp}
              className="font-display font-medium text-warm-white leading-[0.95]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}
            >
              {t('overflowCase.hero.title')}
            </m.h1>
            <m.div variants={fadeUp} className="h-px w-16 bg-accent mt-8" />
          </m.div>
        </div>
      </section>

      {/* Asset: Hero mockup */}
      <div className="max-w-6xl mx-auto px-6 -mt-4 mb-20">
        <ScrollReveal>
          <CaseStudyImage
            src="/images/case-study-overflow/hero.png"
            alt="Gotowy, zabrandowany header + hero wygenerowany z logo klienta (INSTEC)"
            aspectRatio="16/9"
          />
        </ScrollReveal>
      </div>

      <SectionDivider />

      {/* ===== SECTION 1: Problem ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('overflowCase.section1.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed">
              {t('overflowCase.section1.body')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 2: Solution (split) ===== */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-8">
              {t('overflowCase.section2.title')}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ScrollReveal delay={0.08}>
              <p className="font-body text-muted leading-relaxed">
                {t('overflowCase.section2.body')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  value={t('overflowCase.section2.metricLeft')}
                  label={t('overflowCase.section2.metricLeftLabel')}
                />
                <MetricCard
                  value={t('overflowCase.section2.metricRight')}
                  label={t('overflowCase.section2.metricRightLabel')}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.2}>
            <CaseStudyImage
              src="/images/case-study-overflow/gallery.png"
              alt="Siedem realnych log Overflow zabrandowanych automatycznie"
              aspectRatio="16/9"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 3: How it works (timeline) ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-4">
              {t('overflowCase.section3.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-10">
              {t('overflowCase.section3.intro')}
            </p>
          </ScrollReveal>

          <div>
            {(t('overflowCase.section3.steps') || []).map((step, i, arr) => (
              <ScrollReveal key={i} delay={0.08 * (i + 1)}>
                <TimelineStep number={i + 1} title={step.title} isLast={i === arr.length - 1}>
                  {step.body}
                </TimelineStep>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12 space-y-8">
          <ScrollReveal delay={0.3}>
            <CaseStudyImage
              src="/images/case-study-overflow/variants.png"
              alt="Picker: 4 realnie wyrenderowane warianty do wyboru (Krok 3.5)"
              aspectRatio="16/9"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <CaseStudyImage
              src="/images/case-study-overflow/intake.png"
              alt="Narzędzie intake — wgranie logo i treści klienta z podglądem na żywo"
              aspectRatio="16/9"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 4: Proof ===== */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('overflowCase.section4.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed">
              {t('overflowCase.section4.body')}
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(t('overflowCase.section4.metrics') || []).map((metric, i) => (
                <MetricCard key={i} value={metric.value} unit={metric.unit} label={metric.label} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-10 space-y-8">
          <ScrollReveal delay={0.2}>
            <CaseStudyImage
              src="/images/case-study-overflow/side-by-side.png"
              alt="Nasz output obok żywej realizacji Overflow — INSTEC, odtworzony z logo i briefu"
              aspectRatio="16/9"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <CaseStudyImage
              src="/images/case-study-overflow/mobile.png"
              alt="Responsywność — ten sam output na 375px"
              aspectRatio="16/9"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 5: Lessons ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-4">
              {t('overflowCase.section5.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-10">
              {t('overflowCase.section5.intro')}
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {(t('overflowCase.section5.lessons') || []).map((lesson, i) => (
              <ScrollReveal key={i} delay={0.08 * (i + 1)}>
                <div className="bg-surface border border-white/5 rounded-lg p-5 shadow-card">
                  <div className="flex gap-4 items-start">
                    <span className="text-accent font-body font-semibold text-lg leading-none mt-0.5">{i + 1}.</span>
                    <div>
                      <h4 className="font-body font-semibold text-warm-white mb-1">{lesson.title}</h4>
                      <p className="font-body text-muted text-sm leading-relaxed">{lesson.body}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <p className="font-body text-muted leading-relaxed mt-10">
              {t('overflowCase.section5.closing')}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </m.div>
  )
}

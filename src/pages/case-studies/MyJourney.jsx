import { m } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import ScrollReveal from '../../components/ScrollReveal'
import CaseStudyImage from '../../components/CaseStudyImage'
import MetricCard from '../../components/MetricCard'
import PullQuote from '../../components/PullQuote'
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

export default function MyJourney() {
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
              Case Study
            </m.p>
            <m.h1
              variants={fadeUp}
              className="font-display font-medium text-warm-white leading-[0.95]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}
            >
              {t('caseStudy.hero.title')}
            </m.h1>
            <m.div variants={fadeUp} className="h-px w-16 bg-accent mt-8" />
          </m.div>
        </div>
      </section>

      {/* Asset: Hero Mockup */}
      <div className="max-w-6xl mx-auto px-6 -mt-4 mb-20">
        <ScrollReveal>
          <CaseStudyImage
            src="/images/case-study/hero-mockup.webp"
            alt="Dashboard strategii marketingowej i Claude Code — dwa ekrany pokazujące synergie marketingu i technologii"
            aspectRatio="21/9"
          />
        </ScrollReveal>
      </div>

      <SectionDivider />

      {/* ===== SECTION 1: Origins ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('caseStudy.section1.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed">
              {t('caseStudy.section1.body')}
            </p>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.1}>
            <CaseStudyImage
              src="/images/case-study/before-after.webp"
              alt="Porównanie: przed (budowa, Żabka, Vinted) vs teraz (20+ systemów marketingowych, strategie, aplikacje z AI)"
              aspectRatio="2/1"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 2: Vinted Signal (Split layout) ===== */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-8">
              {t('caseStudy.section2.title')}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ScrollReveal delay={0.08}>
              <p className="font-body text-muted leading-relaxed">
                {t('caseStudy.section2.body')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  value={t('caseStudy.section2.metricLeft')}
                  label={t('caseStudy.section2.metricLeftLabel')}
                />
                <MetricCard
                  value={t('caseStudy.section2.metricRight')}
                  label={t('caseStudy.section2.metricRightLabel')}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.2}>
            <CaseStudyImage
              src="/images/case-study/vinted-metric.webp"
              alt="900 zł za weekend na Vinted vs 900 zł za tydzień na etacie"
              aspectRatio="3/1"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 3: Cold Calls Failure ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('caseStudy.section3.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-8">
              {t('caseStudy.section3.body')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-body font-semibold text-warm-white text-lg mb-4">
              {t('caseStudy.section3.subtitle')}
            </h3>
            <ul className="space-y-3">
              {(t('caseStudy.section3.bullets') || []).map((bullet, i) => (
                <li key={i} className="flex gap-3 text-muted font-body text-sm leading-relaxed">
                  <span className="text-accent mt-1 flex-shrink-0">&#x2022;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <PullQuote>
              {t('caseStudy.section3.closing')}
            </PullQuote>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-8">
          <ScrollReveal delay={0.25}>
            <CaseStudyImage
              src="/images/case-study/ignorance-funnel.webp"
              alt="Lejek ignorancji: 3000 cold calli zwęża się do 500 zł przychodu — wizualizacja nieefektywności"
              aspectRatio="4/3"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 4: Diagnosing Systems (Split: asset left, text right) ===== */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-8">
              {t('caseStudy.section4.title')}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ScrollReveal delay={0.08}>
              <CaseStudyImage
                src="/images/case-study/evolution-collage.webp"
                alt="Trzy etapy ewolucji: Wizytówkarz → Freelancer → Strateg"
                aspectRatio="4/3"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="font-body text-muted leading-relaxed">
                {t('caseStudy.section4.body')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 5: My Process (Timeline) ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-4">
              {t('caseStudy.section5.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-10">
              {t('caseStudy.section5.intro')}
            </p>
          </ScrollReveal>

          <div>
            {(t('caseStudy.section5.steps') || []).map((step, i, arr) => (
              <ScrollReveal key={i} delay={0.08 * (i + 1)}>
                <TimelineStep
                  number={i + 1}
                  title={step.title}
                  isLast={i === arr.length - 1}
                >
                  {step.body}
                </TimelineStep>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12 space-y-8">
          <ScrollReveal delay={0.3}>
            <CaseStudyImage
              src="/images/case-study/process-flowchart.webp"
              alt="Proces w 7 krokach: Diagnoza → Deep Research → Strategia → Lejek → Copywriting → Design → Test z rynkiem"
              aspectRatio="16/9"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <CaseStudyImage
              src="/images/case-study/research-closeup.webp"
              alt="Fragment analizy konkurencji — zanonimizowany dokument pokazujący głębokość researchu"
              aspectRatio="4/3"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 6: AI Adoption ===== */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('caseStudy.section6.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-4">
              {t('caseStudy.section6.body')}
            </p>
            <p className="font-body text-muted leading-relaxed">
              {t('caseStudy.section6.body2')}
            </p>
          </ScrollReveal>

          {/* AI Timeline */}
          <div className="mt-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 relative">
              <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-muted-dim/30" />
              {(t('caseStudy.section6.timeline') || []).map((item, i) => (
                <ScrollReveal key={i} delay={0.1 * (i + 1)} className="flex-1 relative">
                  <div className="flex md:flex-col items-center md:items-center gap-3 md:gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-[10px] font-body font-semibold text-accent">{item.year}</span>
                    </div>
                    <p className="text-sm font-body text-muted md:text-center md:mt-2">{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12 space-y-8">
          <ScrollReveal delay={0.3}>
            <CaseStudyImage
              src="/images/case-study/ai-timeline.webp"
              alt="Timeline adopcji AI: 2023 skreślony ChatGPT → 2024 eksperymenty → 2025 Claude jako partner → 2026 koduję aplikacje"
              aspectRatio="3/1"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <CaseStudyImage
              src="/images/case-study/claude-code-screenshot.webp"
              alt="Sesja Claude Code — budowanie aplikacji z AI, iteracyjny proces development"
              aspectRatio="16/9"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 7: 60 Days, Two Strategies ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('caseStudy.section7.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-8">
              {t('caseStudy.section7.body')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-body font-semibold text-warm-white text-lg mb-4">
              {t('caseStudy.section7.subtitle')}
            </h3>
            <ul className="space-y-2.5">
              {(t('caseStudy.section7.bullets') || []).map((bullet, i) => (
                <li key={i} className="flex gap-3 text-muted font-body text-sm leading-relaxed">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#x2713;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Metrics Row */}
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-3 gap-4">
              {(t('caseStudy.section7.metrics') || []).map((metric, i) => (
                <MetricCard key={i} value={metric.value} unit={metric.unit} label={metric.label} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-10 space-y-8">
          <ScrollReveal delay={0.2}>
            <CaseStudyImage
              src="/images/case-study/deliverables-grid.webp"
              alt="Deliverables: landing page, lejek sprzedażowy, strategia — grid 2x2"
              aspectRatio="4/3"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <CaseStudyImage
              src="/images/case-study/sixty-days-cards.webp"
              alt="60 dni / 2 branże / od zera do działającego systemu"
              aspectRatio="3/1"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 8: 1 of 60 Candidates ===== */}
      <section className="py-20 md:py-28 bg-surface/50">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-6">
              {t('caseStudy.section8.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-4">
              {t('caseStudy.section8.body')}
            </p>
            <p className="font-body text-muted leading-relaxed">
              {t('caseStudy.section8.body2')}
            </p>
          </ScrollReveal>
        </div>

        {/* Big Metrics */}
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(t('caseStudy.section8.metrics') || []).map((metric, i) => (
                <MetricCard key={i} value={metric.value} unit={metric.unit} label={metric.label} />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-10 space-y-8">
          <ScrollReveal delay={0.2}>
            <CaseStudyImage
              src="/images/case-study/stats-bold.webp"
              alt="1 z 60 kandydatów / 20+ systemów / 1400 konwersji / 2 aplikacje z AI"
              aspectRatio="3/1"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <CaseStudyImage
              src="/images/case-study/apps-mockup.webp"
              alt="Mockupy aplikacji Anomy i DesignDrop — laptop i telefon w perspektywie"
              aspectRatio="16/9"
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 9: Lessons Learned ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-white text-2xl md:text-3xl leading-snug mb-4">
              {t('caseStudy.section9.title')}
            </h2>
            <p className="font-body text-muted leading-relaxed mb-10">
              {t('caseStudy.section9.intro')}
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {(t('caseStudy.section9.lessons') || []).map((lesson, i) => (
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
              {t('caseStudy.section9.closing')}
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-12">
          <ScrollReveal delay={0.55}>
            <CaseStudyImage
              src="/images/case-study/skills-stack.webp"
              alt="Stack kompetencji: Marketing / Sprzedaż / Strategia / Technologia — cztery nakładające się warstwy"
              aspectRatio="16/9"
            />
          </ScrollReveal>
        </div>
      </section>
    </m.div>
  )
}

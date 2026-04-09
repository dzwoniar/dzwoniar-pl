import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-warm-white font-body font-bold text-sm tracking-[0.15em] uppercase hover:text-accent transition-colors">
          JD
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-xs font-body font-medium uppercase tracking-[0.2em] transition-colors ${
              location.pathname === '/' ? 'text-accent' : 'text-muted hover:text-warm-white'
            }`}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/case-study/my-journey"
            className={`text-xs font-body font-medium uppercase tracking-[0.2em] transition-colors ${
              location.pathname.includes('case-study') ? 'text-accent' : 'text-muted hover:text-warm-white'
            }`}
          >
            {t('nav.caseStudy')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

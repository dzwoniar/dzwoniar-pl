import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 bg-midnight">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-body text-muted">
            &copy; {new Date().getFullYear()} Jakub Dzwoniarski
          </span>
          <span className="text-muted-dim">|</span>
          <span className="text-xs font-body text-muted-dim">{t('footer.built')}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:j.dzwoniarski5@gmail.com"
            className="text-xs font-body text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://dzwoniar.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body text-muted hover:text-accent transition-colors"
          >
            dzwoniar.pl
          </a>
        </div>
      </div>
    </footer>
  )
}

import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 bg-surface rounded-full p-0.5 border border-white/5">
      <button
        onClick={() => setLang('pl')}
        className={`px-3 py-1 rounded-full text-xs font-body font-medium transition-all duration-200 ${
          lang === 'pl'
            ? 'bg-accent text-midnight'
            : 'text-muted hover:text-warm-white'
        }`}
      >
        PL
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-body font-medium transition-all duration-200 ${
          lang === 'en'
            ? 'bg-accent text-midnight'
            : 'text-muted hover:text-warm-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}

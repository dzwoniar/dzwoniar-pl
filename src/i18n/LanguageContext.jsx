import { createContext, useContext, useState, useCallback } from 'react'
import pl from '../content/pl.json'
import en from '../content/en.json'

const translations = { pl, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'pl'
    } catch {
      return 'pl'
    }
  })

  const switchLang = useCallback((newLang) => {
    setLang(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch {}
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      if (value == null) return key
      value = value[k]
    }
    return value ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

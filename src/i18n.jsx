import { createContext, useContext, useEffect, useState } from 'react'
import { content, defaultLang, languages } from './data.js'

const STORAGE_KEY = 'portfolio-lang'
const supported = languages.map((l) => l.code)

const LanguageContext = createContext(null)

/** Pick the initial language: saved choice → browser language → default. */
function detectLang() {
  if (typeof window === 'undefined') return defaultLang
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && supported.includes(saved)) return saved
  const nav = window.navigator.language?.slice(0, 2).toLowerCase()
  return supported.includes(nav) ? nav : defaultLang
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  // Persist the choice and keep <html lang> in sync for a11y / SEO.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next) => {
    if (supported.includes(next)) setLangState(next)
  }

  const value = { lang, setLang, languages, t: content[lang] }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/** Access the current language, setter, and the translated content tree `t`. */
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

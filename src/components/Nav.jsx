import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import { useLang } from '../i18n.jsx'
import styles from './Nav.module.css'

export default function Nav() {
  const { lang, setLang, languages, t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Solidify the bar's background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const langSwitch = (
    <div className={styles.langSwitch} role="group" aria-label="Language">
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`${styles.langBtn} ${lang === l.code ? styles.langActive : ''}`}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} onClick={close}>
          {profile.brand}
          <span className={styles.dot}>.</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {t.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {langSwitch}
          <a href="#contact" className={styles.cta}>
            {t.ui.hireMe}
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${open ? styles.open : ''}`} />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}
        hidden={!open}
      >
        <nav className={styles.mobileLinks} aria-label="Mobile">
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={close}>
            {t.ui.hireMe}
          </a>
        </nav>
      </div>
    </header>
  )
}

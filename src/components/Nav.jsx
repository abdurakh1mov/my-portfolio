import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data.js'
import styles from './Nav.module.css'

export default function Nav() {
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

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} onClick={close}>
          {profile.brand}
          <span className={styles.dot}>.</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Hire me
        </a>

        <button
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
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
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={close}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  )
}

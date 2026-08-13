import { useLang } from '../i18n.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const { hero, ui } = t

  return (
    <section id="top" className={`section ${styles.hero}`}>
      <div className="container">
        <h1 className={styles.title}>
          {hero.lead} <span className={styles.accent}>{hero.accent}</span>
          <br />
          {hero.trail}
        </h1>

        <p className={styles.tagline}>{hero.tagline}</p>

        <div className={styles.actions}>
          <a href="#apps" className={styles.primary}>
            {ui.exploreApps}
          </a>
          <a href="#contact" className={styles.secondary}>
            {ui.getInTouch}
          </a>
        </div>

        {/* Phone screenshot mock-ups — hidden until real screenshots are ready.
        <div className={styles.phones} aria-hidden="true">
          {heroPhones
            .map((id) => t.apps.find((a) => a.id === id)?.name ?? id)
            .map((name, i) => (
              <div key={name} className={styles.phone} data-index={i}>
                <div className={styles.screen}>{name}</div>
              </div>
            ))}
        </div>
        (re-enable by importing heroPhones from '../data.js') */}
      </div>
    </section>
  )
}

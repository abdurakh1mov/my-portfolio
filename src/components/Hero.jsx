import { heroPhones } from '../data.js'
import { useLang } from '../i18n.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const { hero, ui, apps } = t

  // Map hero phone ids to their localized display names.
  const phoneNames = heroPhones.map(
    (id) => apps.find((a) => a.id === id)?.name ?? id,
  )

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

        <div className={styles.phones} aria-hidden="true">
          {phoneNames.map((name, i) => (
            <div key={name} className={styles.phone} data-index={i}>
              <div className={styles.screen}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

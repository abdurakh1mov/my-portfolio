import { profile } from '../data.js'
import styles from './Hero.module.css'

const PHONES = ['Lumen', 'Fathom', 'Nimbus']

export default function Hero() {
  const { hero, available, year } = profile

  return (
    <section id="top" className={`section ${styles.hero}`}>
      <div className="container">
        {available && (
          <div className={styles.badge}>
            <span className={styles.pulse} />
            Available for work · {year}
          </div>
        )}

        <h1 className={styles.title}>
          {hero.lead} <span className={styles.accent}>{hero.accent}</span>
          <br />
          {hero.trail}
        </h1>

        <p className={styles.tagline}>{hero.tagline}</p>

        <div className={styles.actions}>
          <a href="#apps" className={styles.primary}>
            Explore apps
          </a>
          <a href="#contact" className={styles.secondary}>
            Get in touch
          </a>
        </div>

        <div className={styles.phones} aria-hidden="true">
          {PHONES.map((name, i) => (
            <div key={name} className={styles.phone} data-index={i}>
              <div className={styles.screen}>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

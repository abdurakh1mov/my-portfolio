import { apps } from '../data.js'
import styles from './Apps.module.css'

export default function Apps() {
  return (
    <section id="apps" className="section container">
      <header className={styles.head}>
        <h2 className={styles.title}>Featured apps</h2>
        <p className={styles.subtitle}>A selection of what I&apos;ve shipped.</p>
      </header>

      <div className={styles.grid}>
        {apps.map((app) => (
          <article key={app.name} className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.icon} style={{ background: app.gradient }} />
              <div>
                <h3 className={styles.name}>{app.name}</h3>
                <p className={styles.meta}>
                  {app.category} · {app.rating}★
                </p>
              </div>
            </div>
            <p className={styles.desc}>{app.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

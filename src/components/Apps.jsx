import { appVisuals } from '../data.js'
import { useLang } from '../i18n.jsx'
import styles from './Apps.module.css'

export default function Apps() {
  const { t } = useLang()

  return (
    <section id="apps" className="section container">
      <header className={styles.head}>
        <h2 className={styles.title}>{t.appsSection.title}</h2>
        <p className={styles.subtitle}>{t.appsSection.subtitle}</p>
      </header>

      <div className={styles.grid}>
        {t.apps.map((app) => (
          <article key={app.id} className={styles.card}>
            <div className={styles.cardHead}>
              <div
                className={styles.icon}
                style={{ background: appVisuals[app.id] }}
              />
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

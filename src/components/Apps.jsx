import { appVisuals, appLogos, appLinks } from '../data.js'
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
        {t.apps.map((app) => {
          const links = appLinks[app.id] ?? {}
          return (
            <article key={app.id} className={styles.card}>
              <div className={styles.cardHead}>
                {appLogos[app.id] ? (
                  <img
                    className={`${styles.icon} ${styles.logo} ${
                      appLogos[app.id].padded ? styles.logoPadded : ''
                    }`}
                    src={appLogos[app.id].src}
                    alt={`${app.name} logo`}
                  />
                ) : (
                  <div
                    className={styles.icon}
                    style={{ background: appVisuals[app.id] }}
                  />
                )}
                <div>
                  <h3 className={styles.name}>{app.name}</h3>
                  <p className={styles.meta}>
                    {app.category}
                    {app.rating ? ` · ${app.rating}★` : ''}
                  </p>
                </div>
              </div>
              <p className={styles.desc}>{app.description}</p>
              <div className={styles.cardLinks}>
                {links.ios && (
                  <a
                    className={styles.storeLink}
                    href={links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ui.linkAppStore} ↗
                  </a>
                )}
                {links.android && (
                  <a
                    className={styles.storeLink}
                    href={links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ui.linkGooglePlay} ↗
                  </a>
                )}
                {links.web && (
                  <a
                    className={styles.storeLink}
                    href={links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ui.linkWebsite} ↗
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

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
        {t.apps.map((app) => (
          <a
            key={app.id}
            className={styles.card}
            href={appLinks[app.id]}
            target="_blank"
            rel="noopener noreferrer"
          >
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
            {appLinks[app.id] && (
              <span className={styles.storeLink}>
                {appLinks[app.id].includes('apps.apple.com')
                  ? t.ui.viewOnStore
                  : t.ui.visitSite}{' '}
                ↗
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}

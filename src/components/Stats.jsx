import { useLang } from '../i18n.jsx'
import styles from './Stats.module.css'

export default function Stats() {
  const { t } = useLang()

  return (
    <section className="container" aria-label="Key stats">
      <div className={styles.grid}>
        {t.stats.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

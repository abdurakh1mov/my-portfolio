import { stats } from '../data.js'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section className="container" aria-label="Key stats">
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

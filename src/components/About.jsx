import { profile } from '../data.js'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className="section container">
      <div className={styles.inner}>
        <h2 className={styles.title}>About me</h2>
        {profile.about.map((para, i) => (
          <p key={i} className={i === 0 ? styles.lead : styles.body}>
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}

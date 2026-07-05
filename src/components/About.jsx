import { useLang } from '../i18n.jsx'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section container">
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.about.title}</h2>
        {t.about.paragraphs.map((para, i) => (
          <p key={i} className={i === 0 ? styles.lead : styles.body}>
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}

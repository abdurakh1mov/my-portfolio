import { useLang } from '../i18n.jsx'
import styles from './Experience.module.css'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="work" className="section container">
      <h2 className={styles.title}>{t.experienceSection.title}</h2>
      <ol className={styles.list}>
        {t.experience.map((job) => (
          <li key={job.company} className={styles.item}>
            <div className={styles.period}>{job.period}</div>
            <div>
              <h3 className={styles.role}>
                {job.role} · {job.company}
              </h3>
              <p className={styles.summary}>{job.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

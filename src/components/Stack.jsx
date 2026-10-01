import { stack } from '../data.js'
import { useLang } from '../i18n.jsx'
import styles from './Stack.module.css'

export default function Stack() {
  const { lang, t } = useLang()

  return (
    <section id="stack" className="section container">
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.stackSection.title}</h2>
        <div className={styles.groups}>
          {stack.map((group) => (
            <div key={group.id} className={styles.group}>
              <h3 className={styles.groupTitle}>
                {t.stackSection.groups[group.id]}
              </h3>
              <ul className={styles.tags}>
                {group.items.map((item) => {
                  const label = typeof item === 'string' ? item : item[lang]
                  return (
                    <li key={label} className={styles.tag}>
                      {label}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

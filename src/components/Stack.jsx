import { stack } from '../data.js'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section id="stack" className="section container">
      <div className={styles.inner}>
        <h2 className={styles.title}>My stack</h2>
        <ul className={styles.tags}>
          {stack.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

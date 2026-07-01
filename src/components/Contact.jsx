import { profile, socials } from '../data.js'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <footer id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className={styles.title}>Let&apos;s build something</h2>
        <p className={styles.subtitle}>
          Available for senior roles &amp; freelance projects.
        </p>

        <div className={styles.actions}>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email}
          </a>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.social}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          © {profile.year} {profile.name}. Built with React.
        </p>
      </div>
    </footer>
  )
}

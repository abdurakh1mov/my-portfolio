import { profile, socials } from '../data.js'
import { useLang } from '../i18n.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()

  return (
    <footer id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className={styles.title}>{t.contact.title}</h2>
        <p className={styles.subtitle}>{t.contact.subtitle}</p>

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
          © {profile.year} {profile.name}. {t.contact.copyright}
        </p>
      </div>
    </footer>
  )
}

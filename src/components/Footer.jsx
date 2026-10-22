import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          © {year} {profile.name}
        </p>
        <p className="footer__links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}

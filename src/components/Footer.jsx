import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          © {year} {profile.name}
        </p>
        <p>Junior Java Developer · Yangon</p>
      </div>
    </footer>
  )
}

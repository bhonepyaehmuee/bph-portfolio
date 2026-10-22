import { about, profile } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <h2>About</h2>
        <p className="lede">
          {profile.location} · Open to junior backend roles
        </p>

        <div className="about">
          <div className="about__copy">
            {about.map((text) => (
              <p key={text.slice(0, 32)}>{text}</p>
            ))}
          </div>

          <ul className="langs">
            {profile.languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong>
                <span>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

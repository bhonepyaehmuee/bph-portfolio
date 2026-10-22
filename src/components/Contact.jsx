import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <h2>Contact</h2>
        <p className="lede">
          Happy to talk about junior Java / backend roles.
        </p>

        <div className="contact__row">
          <a className="btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn--outline" href={profile.resumeUrl} download>
            Download resume
          </a>
        </div>

        <ul className="contact__list">
          <li>{profile.location}</li>
          <li>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

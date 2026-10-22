import { profile } from '../data'
import photo from '../assets/profile.png'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <img
          className="hero__photo"
          src={photo}
          alt={profile.name}
          width={220}
          height={220}
        />

        <div className="hero__text">
          <p className="hero__name">{profile.name}</p>
          <h1>{profile.role}</h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn" href="#projects">
              View projects
            </a>
            <a className="btn btn--outline" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

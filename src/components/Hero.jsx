import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import photo from '../assets/profile.png'

export default function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setPhotoLoaded(true)
    }
  }, [])

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div
          className={`hero__avatar ${photoLoaded ? 'hero__avatar--ready' : ''}`}
          aria-busy={!photoLoaded}
        >
          {!photoLoaded && (
            <div className="hero__avatar-loading" aria-hidden="true">
              <span className="hero__avatar-spinner" />
              <span className="hero__avatar-initials">{initials}</span>
            </div>
          )}

          <img
            ref={imgRef}
            className="hero__photo"
            src={photo}
            alt={profile.name}
            width={220}
            height={220}
            onLoad={() => setPhotoLoaded(true)}
            onError={() => setPhotoLoaded(true)}
          />
        </div>

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

          <div className="hero__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

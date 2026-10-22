import { useState } from 'react'
import { profile } from '../data'

// Links shown in the top navigation
const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  // menuOpen = true → show mobile menu
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <div className="header__inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          {profile.name}
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          className="menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--small"
            href={profile.resumeUrl}
            download
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

/**
 * App.jsx = the main page.
 * It only puts the components together (like building blocks).
 *
 * Folder guide:
 *   src/data.js              → all text / links (edit your CV info here)
 *   src/components/Navbar.jsx
 *   src/components/Hero.jsx
 *   src/components/About.jsx
 *   src/components/Skills.jsx
 *   src/components/Experience.jsx
 *   src/components/Education.jsx
 *   src/components/Projects.jsx
 *   src/components/Contact.jsx
 *   src/components/Footer.jsx
 *   src/index.css            → all styles
 */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

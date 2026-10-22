import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section section--tint">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="lede">Selected work that shows how I build software</p>

        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="project">
              <p className="project__meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="project__stack">{project.stack.join(' · ')}</p>

              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

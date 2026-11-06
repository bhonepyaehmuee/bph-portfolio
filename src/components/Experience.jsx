import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section section--tint">
      <div className="wrap">
        <h2>Experience</h2>
        <p className="lede">Professional work experience</p>

        <ul className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <span className="timeline__year">{job.period}</span>
              <div>
                <h3>
                  {job.role}
                  <span className="timeline__meta">
                    {' '}
                    · {job.company}
                    {job.type ? ` (${job.type})` : ''}
                  </span>
                </h3>
                {job.points?.length > 0 && (
                  <ul className="timeline__points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

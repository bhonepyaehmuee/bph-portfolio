import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <h2>Education</h2>
        <p className="lede">Academic and professional IT training</p>

        <ul className="timeline">
          {education.map((item) => (
            <li key={item.degree + item.period}>
              <span className="timeline__year">{item.period}</span>
              <div>
                <h3>{item.degree}</h3>
                <p>
                  {item.school}
                  {item.detail ? ` · ${item.detail}` : ''}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section section--tint">
      <div className="wrap">
        <h2>Technical Skills</h2>
        <p className="lede">Tools and technologies from my CV</p>

        <div className="skills">
          {skills.map((group) => (
            <div key={group.group} className="skill">
              <h3>{group.group}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import skillIcons from './SkillIcons'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skillIcons[skill] && (
              <img
                src={`https://cdn.simpleicons.org/${skillIcons[skill]}`}
                alt=''
                width={16}
                height={16}
              />
            )}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
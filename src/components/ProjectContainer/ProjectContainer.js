import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import skillIcons from '../Skills/SkillIcons'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {project.image && (<img
    src={
      project.image.startsWith("http")
        ? project.image
        : `${process.env.PUBLIC_URL}/images/${project.image}`
    }
    alt={`${project.name} screenshot`}
    />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {skillIcons[item] && (
              <img
                src={`https://cdn.simpleicons.org/${skillIcons[item]}`}
                alt=''
                width={14}
                height={14}
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer

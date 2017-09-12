import { h } from 'preact'
import websiteIcon from './images/icons/website.svg'
import twitterIcon from './images/icons/twitter.svg'
import githubIcon from './images/icons/github.svg'
import linkedinIcon from './images/icons/linkedin.svg'

const InstructorMedia = ({picture, name, index, direction}) => {
  if (direction === 'left' && index % 2) {
    return ''
  }

  return (
    <figure className={`media-${direction}`}>
      <p className='image is-64x64 avatar'>
        <img src={picture} alt={`${name}'s profile picture'`} />
      </p>
    </figure>
  )
}

const Instructor = ({name, picture, description, links, direction}) => (
  <div className='box'>
    <div className='media'>
      {direction === 'left' && <InstructorMedia name={name} picture={picture} direction={direction} />}
      <div className='media-content'>
        <div className='content' style={{textAlign: direction}}>
          <h3 className='is-size-4'>{name}</h3>
          <p>
            <a title='Website' href={links.website} target='_blank'>
              <img alt='Website' src={websiteIcon} style={{width: '1em', height: '1em'}} />
            </a>&nbsp;
            <a title='Twitter' href={links.twitter} target='_blank'>
              <img alt='Twitter' src={twitterIcon} style={{width: '1em', height: '1em'}} />
            </a>&nbsp;
            <a title='GitHub' href={links.github} target='_blank'>
              <img alt='GitHub' src={githubIcon} style={{width: '1em', height: '1em'}} />
            </a>&nbsp;
            <a title='LinkedIn' href={links.linkedin} target='_blank'>
              <img alt='LinkedIn' src={linkedinIcon} style={{width: '1em', height: '1em'}} />
            </a>
          </p>
        </div>
      </div>
      {direction === 'right' && <InstructorMedia name={name} picture={picture} direction={direction} />}
    </div>
    <section className='section'>
      <div className='content'>
        <p className='is-size-6'>
          {description}
        </p>
      </div>
    </section>
  </div>
)

export default Instructor

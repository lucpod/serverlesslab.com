import { h } from 'preact'
import websiteIcon from './images/icons/website.svg'
import twitterIcon from './images/icons/twitter.svg'
import githubIcon from './images/icons/github.svg'
import linkedinIcon from './images/icons/linkedin.svg'

const Instructor = ({name, picture, description, links}) => (
  <div className='card instructor'>
    <div className='card-image'>
      <figure className='image'>
        <img src={picture} alt={`${name}'s profile picture'`} />
      </figure>
    </div>
    <div className='card-content'>
      <div className='content'>
        <h3>{name}</h3>

        <p>{description}</p>
      </div>
    </div>
    <div className='card-footer'>
      <div className='card-footer-item'>
        <a title='Website' href={links.website} target='_blank'>
          <img alt='Website' src={websiteIcon} style={{width: '2em', height: '2em'}} />
        </a>&nbsp;
        <a title='Twitter' href={links.twitter} target='_blank'>
          <img alt='Twitter' src={twitterIcon} style={{width: '2em', height: '2em'}} />
        </a>&nbsp;
        <a title='GitHub' href={links.github} target='_blank'>
          <img alt='GitHub' src={githubIcon} style={{width: '2em', height: '2em'}} />
        </a>&nbsp;
        <a title='LinkedIn' href={links.linkedin} target='_blank'>
          <img alt='LinkedIn' src={linkedinIcon} style={{width: '2em', height: '2em'}} />
        </a>
      </div>
    </div>
  </div>
)

export default Instructor

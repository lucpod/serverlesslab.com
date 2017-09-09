import { h } from 'preact'

const Instructor = ({name, picture, description, links}) => (
  <div className='instructor'>
    <h3>{name}</h3>
    <img src={picture} />
    <p>{description}</p>
    <ul>
      <li><a href={links.website} target='_blank'>Website</a></li>
      <li><a href={links.twitter} target='_blank'>Twitter</a></li>
      <li><a href={links.github} target='_blank'>GitHub</a></li>
      <li><a href={links.linkedin} target='_blank'>LinkedIn</a></li>
    </ul>
  </div>
)

export default Instructor

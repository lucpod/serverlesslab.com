import { h } from 'preact'
import { openChat } from './drift'

const TalkWithUsButton = ({label = 'Talk with us today'}) => (
  <a href='#' onClick={openChat} className='button is-info is-large'>{label}</a>
)

export default TalkWithUsButton

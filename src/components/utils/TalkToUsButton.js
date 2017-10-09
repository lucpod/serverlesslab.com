import { h } from 'preact'
import { openChat } from './drift'

const TalkToUsButton = ({label = 'Talk to us today'}) => (
  <a href='#' onClick={openChat} className='button is-info is-large'>{label}</a>
)

export default TalkToUsButton

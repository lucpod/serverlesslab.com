import { h } from 'preact'
import { version, versionDate } from '../../../package.json'

const VersionBadge = () => (
  <a href='https://github.com/lucpod/serverlesslab.com' className='versionBadge'>
    <span className='version'>v{version}</span><span className='date'>{versionDate}</span>
  </a>
)

export default VersionBadge

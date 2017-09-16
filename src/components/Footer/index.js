import { h } from 'preact'
import VersionBadge from './VersionBadge'
import logo from '../images/logo-color.svg'

const Footer = () => (
  <section id='footer' className='section footer'>
    <div className='container'>
      <div className='columns'>
        <div className='column is-three-quarters'>
          <div className='content'>
            <p className='is-size-6'>
              Copyright — &copy; Serverlesslab 2017<br />
              <span className='is-size-7'>All rights reserved</span>
            </p>
            <p className='is-size-7'>
            Cover photo by Igor Ovsyannykov on <a href='https://unsplash.com/photos/vdWewqfr_V0' target='_blank'>Unsplash</a><br />
            Icons set (Science-icons) by <a href='https://www.swifticons.com/' target='_blank'>SwiftIcons</a><br />
            Adopting <a href='https://bulma.io' target='_blank'>Bulma</a> CSS framework
            </p>
          </div>
        </div>
        <div className='column is-one-quarter'>
          <div className='content'>
            <p className='is-size-7 has-text-centered'>
              <a href='/' className='image'>
                <img style={{maxWidth: '300px'}} src={logo} alt='Serverless lab - Effective Serverless, AWS Lambda, and Node.js training' />
              </a>
            </p>
            <p className='is-size-7 has-text-centered'>
              Built with <strong>♥︎</strong> in <strong>Dublin</strong><br />
              by a <strong>Corkonian</strong> and a <strong>Sicilian</strong>
            </p>
            <p className='has-text-centered'><VersionBadge /></p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Footer

import { h } from 'preact'
import Separator from '../Separator'
import bg from './images/bg.jpg'
import logo from './images/logo.svg'

const Hero = () =>
  (
    <div style={{position: 'relative'}}>
      <Separator upClass='neutral' style={{position: 'absolute', 'top': 0, zIndex: 100}} />
      <section id='hero' className='section is-medium is-primary is-bold' style={{backgroundImage: `url(${bg})`}}>
        <div className='hero-body'>
          <div className='container'>
            <p className='has-text-centered' data-aos='zoom-out' data-aos-delay='400'>
              <img className='logo' src={logo} alt='Serverless lab' style={{
                maxWidth: '600px',
                width: '100%'
              }} />
            </p>
            <p className='main-text has-text-centered is-size-2' data-aos='zoom-out' data-aos-delay='600'>
          Effective <strong>Serverless</strong>, <strong>AWS Lambda</strong> and <strong>Node.js</strong> training
            </p>
          </div>
        </div>
      </section>
      <Separator downClass='neutral' style={{position: 'absolute', 'bottom': 0, zIndex: 100}} />
    </div>
  )

export default Hero

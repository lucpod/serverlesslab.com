import { h } from 'preact'
import bg from './images/bg.jpg'
import logo from './images/logo.svg'

const Hero = () =>
  (<section id='hero' className='section is-medium is-primary is-bold' style={{backgroundImage: `url(${bg})`}}>
    <div className='hero-body'>
      <div className='container'>
        <p className='has-text-centered'>
          <img className='logo' src={logo} alt='Serverless lab' style={{
            maxWidth: '600px',
            width: '100%'
          }} />
        </p>
        <p className='main-text has-text-centered is-size-1'>
          Effective <strong>Serverless</strong>, <strong>AWS Lambda</strong> and <strong>Node.js</strong> training
        </p>
      </div>
    </div>
  </section>)

export default Hero

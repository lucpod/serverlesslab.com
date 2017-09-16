import { h } from 'preact'
import Separator from '../Separator'
import bg from './images/bg.jpg'
import logo from './images/404.svg'

const Hero = () =>
  (
    <div style={{position: 'relative'}}>
      <Separator upClass='neutral' style={{position: 'absolute', 'top': 0, zIndex: 100}} />
      <section id='hero' className='notfound section is-medium is-primary is-bold' style={{backgroundImage: `url(${bg})`}}>
        <div className='hero-body'>
          <div className='container'>
            <p className='has-text-centered' data-aos='zoom-out' data-aos-delay='400'>
              <img className='logo' src={logo} alt='Serverless lab' style={{
                maxWidth: '600px',
                width: '100%'
              }} />
            </p>
            <p className='main-text notfound has-text-centered is-size-1' data-aos='zoom-out' data-aos-delay='600'>
              Page Not Found
            </p>
            <p className='has-text-centered is-size-3'><a href='/'>Go back to the Home Page</a></p>
          </div>
        </div>
      </section>
    </div>
  )

export default Hero

import { h } from 'preact'
import Separator from '../Separator'
import bg from '../images/bg.jpg'
import TalkToUsButton from '../utils/TalkToUsButton'

const Closing = () => (
  <div style={{position: 'relative'}}>
    <Separator upClass='neutral' style={{position: 'absolute', 'top': 0, zIndex: 100}} />
    <section id='hero' className='notfound section is-medium is-primary is-bold' style={{backgroundImage: `url(${bg})`}}>
      <div className='hero-body'>
        <div className='container'>
          <p className='main-text closing has-text-centered is-size-1' data-aos='zoom-out' data-aos-delay='300'>
            Learn Serverless today
          </p>
          <p className='has-text-centered is-size-3'><TalkToUsButton label='Talk to us' /></p>
        </div>
      </div>
    </section>
  </div>
)

export default Closing

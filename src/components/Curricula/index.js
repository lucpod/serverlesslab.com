import { h } from 'preact'
import flaskIcon from '../icons/plantflask.svg'

const Curricula = () => (
  <section id='curricula' className='section curricula'>
    <div className='container'>
      <div className='content'>
        <h1 className='title'>Curricula</h1>
      </div>
      <div className='columns'>
        <div className='column is-three-quarters'>
          <div className='content'>
            <p className='is-size-4'>
              All our training sessions are focused on learning through building
              &nbsp;real enterprise ready applications from scratch.
            </p>
            <p className='is-size-5'>We currently offer two curricula, the <strong>Startup curriculum</strong>, suitable for getting your organisation started very quickly with serverless and the <strong>Advanced curriculum</strong>, focused on improving existing serverless skills and acquiring industry-proven best practices.
            </p>
          </div>
          <div className='tabs is-medium is-centered is-boxed'>
            <ul>
              <li className='is-active'><a href='#'>Startup</a></li>
              <li><a href='#'>Advanced</a></li>
            </ul>
          </div>
          <div>
            TODO: add curricula
          </div>
        </div>
        <div className='column is-hidden-mobile'>
          <p className='has-text-centered'>
            <img className='section-icon' src={flaskIcon} />
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Curricula

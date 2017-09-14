import { h, Component } from 'preact'
import TabViewer from './TabViewer'
import StartupCurriculum from './StartupCurriculum'
import AdvancedCurriculum from './AdvancedCurriculum'
import flaskIcon from '../icons/plantflask.svg'

class Curricula extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <section id='curricula' className='section curricula'>
        <div className='container'>
          <div className='content'>
            <h1 data-aos='fade-up' className='title'>Curricula</h1>
          </div>
          <div className='columns' data-aos='fade-right' data-aos-delay='100'>
            <div className='column is-three-quarters'>
              <div className='content'>
                <p className='is-size-4'>
              All our training sessions are focused on learning through building
              &nbsp;real enterprise ready applications from scratch.
                </p>
                <p className='is-size-5'>We currently offer two curricula, the <strong>Startup curriculum</strong>, suitable for getting your organisation started very quickly with serverless and the <strong>Advanced curriculum</strong>, focused on improving existing serverless skills and acquiring industry-proven best practices.
                </p>
              </div>
              <TabViewer
                tabs={['Startup', 'Advanced']}
                tabsContent={[<StartupCurriculum />, <AdvancedCurriculum />]}
              />
            </div>
            <div className='column is-hidden-mobile'>
              <p className='has-text-centered' data-aos='fade-up'>
                <img className='section-icon' src={flaskIcon} />
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Curricula

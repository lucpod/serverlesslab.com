import { h, Component } from 'preact'
import TalkToUsButton from '../utils/TalkToUsButton'
import flagIcon from '../icons/flagstarplanet.svg'

class WhyTraining extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: '2',
      engineers: '20',
      efficiency: '1'
    }

    this._changeDays = this._changeDays.bind(this)
    this._changeEngineers = this._changeEngineers.bind(this)
    this._changeEfficiency = this._changeEfficiency.bind(this)
  }

  _changeDays (e) {
    e.preventDefault()
    this.setState({ days: e.target.value })
  }

  _changeEngineers (e) {
    this.setState({ engineers: e.target.value })
  }

  _changeEfficiency (e) {
    this.setState({ efficiency: e.target.value })
  }

  render () {
    const totWorkingHours = 250 * 8 * parseFloat(this.state.engineers)
    const improvement = parseFloat(this.state.days) * parseFloat(this.state.efficiency) / parseFloat(100)
    const hoursForTraining = 8 * parseFloat(this.state.days) * parseFloat(this.state.engineers)
    const roi = Math.round((totWorkingHours * improvement) - hoursForTraining)

    return (
      <section id='why-training' className='section why-training'>
        <div className='container'>
          <div className='content'>
            <h1 data-aos='fade-up' className='title'>Why choose in-house training</h1>
          </div>

          <div className='columns'>
            <div className='column is-three-quarters' data-aos='fade-right' data-aos-delay='100'>
              <div className='content'>
                <h2 className='is-size-2'>
              Invest in training and save valuable hours of work
                </h2>
                <p className='is-size-4 has-text-grey-dark'>
                  We believe that in house training will improve the performance of your team, making it more efficient and making your
                  organisation save valuable working hours. Hours that you can invest in making your company even more successful.
                </p>
                <div className='box'>
                  <h3>Auto-magic Training ROI calculator™</h3>
                  <div className='columns'>
                    <div className='column is-half'>
                      <div className='content'>
                        <div className='field'>
                          <label className='label'>Days of training</label>
                          <div className='control'>
                            <radiogroup name='days'>
                              <label className='radio is-medium'>
                                <input onChange={this._changeDays} className='radio is-medium' type='radio' name='days' value='1' checked={parseFloat(this.state.days) === 1} /> 1 day
                              </label>
                              <label className='radio is-medium'>
                                <input onChange={this._changeDays} className='radio is-medium' type='radio' name='days' value='2' checked={parseFloat(this.state.days) === 2} /> 2 days
                              </label>
                            </radiogroup>
                          </div>
                        </div>
                        <div className='field'>
                          <label className='label'>Engineers</label>
                          <div className='control'>
                            <input onChange={this._changeEngineers} type='number' min='10' max='50' className='input is-medium' value={this.state.engineers} />
                          </div>
                        </div>
                        <div className='field'>
                          <label className='label'>Expected performance improvement ({this.state.efficiency}%)</label>
                          <div className='control'>
                            <input onChange={this._changeEfficiency} type='range' min='1' max='5' className='range is-medium' value={this.state.efficiency} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='column is-half'>
                      <div className='message is-success'>
                        <div className='message-body'>
                          <p className='has-text-centered'>
                            <strong className='is-size-2'>{roi}</strong><br />
                            <span className='is-size-5'>Hours of work saved in 1 year</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <TalkToUsButton />
                </p>
              </div>
            </div>
            <div className='column is-hidden-mobile'>
              <p className='has-text-centered' data-aos='fade-up'>
                <img className='section-icon' src={flagIcon} />
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WhyTraining

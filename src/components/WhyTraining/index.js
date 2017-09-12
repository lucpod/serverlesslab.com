import { h } from 'preact'
import flagIcon from '../icons/flagstarplanet.svg'

const WhyTraining = () => (
  <section id='why-training' className='section why-training'>
    <div className='container'>
      <div className='content'>
        <h1 className='title'>Why choose in-house training</h1>
      </div>

      <div className='columns'>
        <div className='column is-three-quarters'>
          <div className='content'>
            <h2 className='is-size-2'>
              Invest in training and save valuable hours of work
            </h2>
            <p className='is-size-4 has-text-grey-dark'>
              We calculated that if you spend 2 days training for a team of <strong><span contentEditable>20</span></strong> engineers,
              in one year time these engineers will spend about 40,000 hours of work for your company.
              If our training results in only a 1% improvement in performance, your company will have saved the equivalent of 400 hours of work!
            </p>
            <div className='box'>
              <h3>Auto-magic Training ROI calculator™</h3>
              <div className='columns'>
                <div className='column is-half'>
                  <div className='content'>
                    <div className='field'>
                      <label className='label'>Days of training</label>
                      <div className='control'>
                        <label className='radio'>
                          <input type='radio' name='answer' /> 1 day
                        </label>
                        <label className='radio'>
                          <input type='radio' name='answer' checked /> 2 days
                        </label>
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Engineers</label>
                      <div className='control'>
                        <input type='number' min='10' max='50' className='input' placeholder='' value='20' />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Expected efficiency (%)</label>
                      <div className='control'>
                        <input type='range' min='1' max='5' className='input' placeholder='' value='1' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='column is-half'>
                  Hours of work saved in 1 year
                </div>
              </div>
            </div>
            <p>
              <a href='#' className='button is-info is-large'>Talk with us today</a>
            </p>
          </div>
        </div>
        <div className='column is-hidden-mobile'>
          <p className='has-text-centered'>
            <img className='section-icon' src={flagIcon} />
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default WhyTraining

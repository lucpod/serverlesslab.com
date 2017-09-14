import { h } from 'preact'
import Separator from '../Separator'
import Instructor from './Instructor'
import instructors from './data'
import scientistIcon from '../icons/scientistavatar.svg'

const Instructors = () => (
  <div>
    <Separator downClass='inverted' />
    <section id='instructors' className='section instructors bg-inverted'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
        &nbsp;
          </div>
          <div className='column is-three-quarters'>
            <div className='content'>
              <h1 data-aos='fade-up' className='title'>Our Instructors</h1>
            </div>
          </div>
        </div>

        <div className='columns'>
          <div className='column is-hidden-mobile'>
            <p className='has-text-centered' data-aos='fade-up'>
              <img className='section-icon' src={scientistIcon} />
            </p>
          </div>
          <div className='column is-three-quarters' data-aos='fade-left' data-aos-delay='100'>
            <div className='content'>
              <p className='is-size-5'>Our instructors have proven serverless experience in serverless
              &nbsp;building complex enterprise applications and delivering workshops
              &nbsp;and talks in some of the most famous conferences around the globe.
              </p>
            </div>
            <div className='columns is-centered'>
              { instructors.map((instructor, i) => (
                <div key={i} className='column is-half'>
                  <Instructor {...instructor} direction={i % 2 === 0 ? 'left' : 'right'} />
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    </section>
    <Separator upClass='inverted' />
  </div>
)

export default Instructors

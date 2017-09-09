import { h } from 'preact'
import Instructor from './Instructor'
import instructors from './data'

const Instructors = () => (
  <section id='instructors' className='section instructors'>
    <div className='container'>
      <div className='content'>
        <h2>Our Instructors</h2>
        <p>Our instructors have proven serverless experience in serverless
          &nbsp;building complex enterprise applications and delivering workshops
          &nbsp;and talks in some of the most famous conferences around the globe.
        </p>
      </div>
    </div>
    <div className='columns is-centered'>
      { instructors.map((instructor, i) => (
        <div className='column is-one-quarter'>
          <Instructor {...instructor} />
        </div>
      )) }
    </div>

  </section>
)

export default Instructors
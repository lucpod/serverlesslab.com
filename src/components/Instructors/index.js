import { h } from 'preact'
import Instructor from './Instructor'
import instructors from './data'

const Instructors = () => (
  <section id='instructors' className='instructors'>
    <div className='container'>
      <div className='content'>
        <h2>Our Instructors</h2>
        <p>Our instructors have proven serverless experience in serverless
          &nbsp;building complex enterprise applications and delivering workshops
          &nbsp;and talks in some of the most famous conferences around the globe.</p>
        { instructors.map(instructor => (<Instructor {...instructor} />)) }
      </div>
    </div>
  </section>
)

export default Instructors

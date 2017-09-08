import { h } from 'preact'
import HTMLDocument from './HTMLDocument'
import bulma from 'bulma/css/bulma.css'

const Site = ({assets}) => (
  <HTMLDocument
    title='Serverless Lab - Serverless workshops from serverless and AWS experts'
    metatags={[
      { name: 'description', content: 'Serverless workshops from serverless and AWS experts' }
    ]}
    stylesheets={[ bulma ]}
    scripts={[ `${assets.main}` ]}
  >
    <section className='section'>
      <div className='container'>
        <h1 className='title'>Serverlesslab.com</h1>
        <p className='subtitle'>workshops from serverless and AWS experts!</p>
        <p>Come back soon...</p>
      </div>
    </section>
  </HTMLDocument>
)

export default Site

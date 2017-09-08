import { h } from 'preact'
import HTMLDocument from './HTMLDocument'
import bulma from 'bulma/css/bulma.css'
import Hero from './Hero'
import ValueProposition from './ValueProposition'
import WhyServerless from './WhyServerless'

const Site = ({assets}) => (
  <HTMLDocument
    title='Serverless Lab - Serverless workshops from serverless and AWS experts'
    metatags={[
      { name: 'description', content: 'Serverless workshops from serverless and AWS experts' }
    ]}
    stylesheets={[ bulma ]}
    scripts={[ `${assets.main}` ]}
  >
    <Hero />
    <ValueProposition />
    <WhyServerless />
  </HTMLDocument>
)

export default Site

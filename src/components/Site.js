import { h, render } from 'preact'
import HTMLDocument from './HTMLDocument'
import bulma from 'bulma/css/bulma.css'
import Menu from './Menu'
import Hero from './Hero'
import ValueProposition from './ValueProposition'
import WhyServerless from './WhyServerless'
import Curricula from './Curricula'
import Instructors from './Instructors'

const Content = () => (
  <div>
    <Menu />
    <Hero />
    <ValueProposition />
    <WhyServerless />
    <Curricula />
    <Instructors />
  </div>
)

const Site = ({assets}) => (
  <HTMLDocument
    title='Serverless Lab - Serverless workshops from serverless and AWS experts'
    metatags={[
      { name: 'description', content: 'Serverless workshops from serverless and AWS experts' }
    ]}
    stylesheets={[ bulma ]}
    scripts={[ `${assets.main}` ]}
  >
    <div id='main'>
      <Content />
    </div>
  </HTMLDocument>
)

// frontend initialization
if (window && document) {
  window.onload = function () {
    const root = document.getElementById('main')
    render(<Content isClient />, root, root.firstChild)
  }
}

export default Site

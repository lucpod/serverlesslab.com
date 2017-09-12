import { h, render } from 'preact'
import HTMLDocument from './HTMLDocument'
import '../style.sass'
import Menu from './Menu'
import Hero from './Hero'
import ValueProposition from './ValueProposition'
import WhyServerless from './WhyServerless'
import Curricula from './Curricula'
import Instructors from './Instructors'
import WhyTraining from './WhyTraining'
import Footer from './Footer'
import drift from './utils/drift'

const Content = () => (
  <div>
    <Menu />
    <Hero />
    <ValueProposition />
    <WhyServerless />
    <Curricula />
    <Instructors />
    <WhyTraining />
    <Footer />
  </div>
)

const Site = ({assets}) => (
  <HTMLDocument
    title='Serverless Lab - Serverless workshops from serverless and AWS experts'
    metatags={[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Serverless workshops from serverless and AWS experts' }
    ]}
    stylesheets={[ 'style.css' ]}
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

    if (window.location.href.indexOf('localhost') === -1) {
      drift()
    }
  }
}

export default Site

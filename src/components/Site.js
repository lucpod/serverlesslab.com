import { version } from '../../package.json'
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
import Closing from './Closing'
import Footer from './Footer'
import drift from './utils/drift'
import ga from './utils/ga'
import AOS from 'aos'

const Content = () => (
  <div>
    <Menu />
    <Hero />
    <ValueProposition />
    <WhyServerless />
    <Curricula />
    <Instructors />
    <WhyTraining />
    <Closing />
    <Footer />
  </div>
)

const Site = ({assets}) => (
  <HTMLDocument
    title='Serverless Lab - Serverless workshops from serverless and AWS experts'
    metatags={[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Effective Serverless, AWS Lambda and Node.js training' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Serverless Lab' },
      { property: 'og:description', content: 'Effective Serverless, AWS Lambda and Node.js training' },
      { property: 'og:url', content: 'https://serverlesslab.com' },
      { property: 'og:image', content: 'https://serverlesslab.com/fb-share.jpg' },
      { property: 'fb:app_id', content: '1738463943124904' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@loige' },
      { name: 'twitter:creator', content: '@Podgeypoos79' },
      { name: 'twitter:title', content: 'Serverless Lab' },
      { name: 'twitter:description', content: 'Effective Serverless, AWS Lambda and Node.js training' },
      { name: 'twitter:image', content: 'https://serverlesslab.com/tw-share.jpg' }
    ]}
    links={[
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', color: '#00386d', href: '/safari-pinned-tab.svg' }
    ]}
    stylesheets={[ `style-${version}.css` ]}
    scripts={[ `${assets.site}` ]}
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
      drift() // init drift
      const g = ga() // init google analytics
      g('create', 'UA-106612990-1', 'auto')
      g('send', 'pageview')
    }

    AOS && AOS.init({duration: 600})
  }
}

export default Site

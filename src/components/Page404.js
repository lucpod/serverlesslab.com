import { version } from '../../package.json'
import { h, render } from 'preact'
import HTMLDocument from './HTMLDocument'
import '../style.sass'
import Menu from './Menu'
import Hero404 from './Hero/Hero404'
import Footer from './Footer'
import drift from './utils/drift'
import AOS from 'aos'

const Content = () => (
  <div>
    <Menu base='/' />
    <Hero404 />
    <Footer />
  </div>
)

const Site = ({assets}) => (
  <HTMLDocument
    title='Serverless Lab - Serverless workshops from serverless and AWS experts'
    metatags={[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Serverless workshops from serverless and AWS experts' },
      { name: 'theme-color', content: '#ffffff' }
    ]}
    links={[
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', color: '#00386d', href: '/safari-pinned-tab.svg' }
    ]}
    stylesheets={[ `style-${version}.css` ]}
    scripts={[ `${assets.page404}` ]}
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

    AOS && AOS.init({duration: 600})
  }
}

export default Site

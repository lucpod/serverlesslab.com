import render from 'preact-render-to-string'
import { h } from 'preact'
import Site from './components/Site'

module.exports = (locals) => render(<Site {...locals} />)

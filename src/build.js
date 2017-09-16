import render from 'preact-render-to-string'
import { h } from 'preact'
import Site from './components/Site'
import Page404 from './components/Page404'

module.exports = (locals) => {
  return {
    'index.html': ('<!doctype html>' + render(<Site {...locals} />)),
    '404.html': ('<!doctype html>' + render(<Page404 {...locals} />))
  }
}

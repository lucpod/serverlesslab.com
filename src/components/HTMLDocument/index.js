import { h, Component } from 'preact'

const STATE_SCRIPT_ID = '__HTMLDOCUMENT__UNIVERSAL_STATE'
const ASSET_TYPES = {
  STYLESHEET: 'STYLESHEET',
  SCRIPT: 'SCRIPT'
}

class HTMLDocument extends Component {
  renderChildren () {
    return this.props.children ? this.props.children : null
  }

  renderFavicon () {
    const { favicon } = this.props
    if (!favicon) return null
    return <link rel='icon' href={favicon} />
  }

  renderMetatags () {
    const { metatags } = this.props
    return metatags.map((props, index) => <meta key={index} {...props} />)
  }

  renderInlineAsset (type, html) {
    const innerHTML = { __html: html }
    if (type === ASSET_TYPES.STYLESHEET) {
      return <style key={html} dangerouslySetInnerHTML={innerHTML} />
    }
    return <script key={html} dangerouslySetInnerHTML={innerHTML} />
  }

  renderImportedAsset (type, props) {
    if (type === ASSET_TYPES.STYLESHEET) {
      return <link key={props.href} rel='stylesheet' {...props} />
    }
    return <script key={props.src} {...props} />
  }

  renderAsset (type, props) {
    if (props.inline) {
      const html = props.inline
      return this.renderInlineAsset(type, html)
    }
    return this.renderImportedAsset(type, props)
  }

  renderStylesheets () {
    const { stylesheets } = this.props
    return stylesheets.map(props => {
      const stylesheetProps = typeof props === 'string' ? { href: props } : props
      return this.renderAsset(ASSET_TYPES.STYLESHEET, stylesheetProps)
    })
  }

  renderScripts () {
    const { scripts } = this.props
    return scripts.map(props => {
      const scriptProps = typeof props === 'string' ? { src: props } : props
      return this.renderAsset(ASSET_TYPES.SCRIPT, scriptProps)
    })
  }

  renderUniversalStateScript () {
    if (!this.props.universalState) return null
    const { universalState } = this.props
    const stringifiedUniversalState = JSON.stringify(universalState)
    const innerHTML = { __html: stringifiedUniversalState }
    return <script id={STATE_SCRIPT_ID} type='application/json' dangerouslySetInnerHTML={innerHTML} />
  }

  render () {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>{this.props.title}</title>
          {this.renderMetatags()}
          {this.renderFavicon()}
          {this.renderStylesheets()}
        </head>
        <body>
          {this.renderChildren()}
          {this.renderUniversalStateScript()}
          {this.renderScripts()}
        </body>
      </html>
    )
  }
}

HTMLDocument.defaultProps = {
  childrenContainerId: 'app',
  htmlAttributes: {},
  favicon: '',
  metatags: [],
  scripts: [],
  stylesheets: [],
  title: '',
  universalState: null
}

export default HTMLDocument

import { h, Component } from 'preact'

class TabViewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: props.selectedIndex ? parseInt(props.selectedIndex) : 0
    }

    this._switchTab = this._switchTab.bind(this)
  }

  _switchTab (e) {
    e.preventDefault()
    this.setState({
      selected: parseInt(e.target.rel)
    })
  }

  render ({tabs, tabsContent}) {
    return (
      <div>
        <div className='tabs is-medium is-centered is-boxed'>
          <ul>
            {tabs.map((tab, index) => (
              <li key={index} className={this.state.selected === index && 'is-active'}><a onClick={this._switchTab} rel={index} href='#'>{tab}</a></li>
            ))}
          </ul>
        </div>
        <div>
          {tabsContent && tabsContent[this.state.selected]}
        </div>
      </div>
    )
  }
}

export default TabViewer

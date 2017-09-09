import { h, Component } from 'preact'
import planetaryIcon from '../icons/planetarysystem.svg'
import galaxyIcon from '../icons/galaxy.svg'
import scientistIcon from '../icons/scientistavatar.svg'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      burgerActive: false
    }
    this._burgerClick = this._burgerClick.bind(this)
  }

  _burgerClick () {
    this.setState({burgerActive: !this.state.burgerActive})
  }

  render () {
    return (
      <div style={{borderBottom: '3px solid #FA016D'}}>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>Serverlesslab.com</a>

            <div onClick={this._burgerClick}
              className={`navbar-burger ${this.state.burgerActive ? 'is-active' : ''}`}
              data-target='navMenu-main'
            >
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </div>
          </div>

          <div id='navMenu-main' className={`navbar-menu ${this.state.burgerActive ? 'is-active' : ''}`}>
            <div className='navbar-start'>
              <a className='navbar-item ' href='#value-proposition'>
                <img src={planetaryIcon} style={{width: '1em', height: '1em'}} />&nbsp;Our offer
              </a>
              <a className='navbar-item ' href='#why-serverless'>
                <img src={galaxyIcon} style={{width: '1em', height: '1em'}} />&nbsp;Why Serverless?
              </a>
              <a className='navbar-item ' href='#curricula'>
                <img src={galaxyIcon} style={{width: '1em', height: '1em'}} />&nbsp;Curricula
              </a>
              <a className='navbar-item ' href='#instructors'>
                <img src={scientistIcon} style={{width: '1em', height: '1em'}} />&nbsp;Instructors
              </a>
              <a className='navbar-item ' href='#talk-with-us'>
                <img src={galaxyIcon} style={{width: '1em', height: '1em'}} />&nbsp;Talk with us
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu

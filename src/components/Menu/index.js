import { h, Component } from 'preact'
import logo from '../images/logo-color.svg'

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

  render ({ base = '' }) {
    return (
      <div id='menu' className='mainnav'>
        <div className='container'>
          <nav className='navbar'>
            <div className='navbar-brand'>
              <a className='navbar-item' href='/'>
                <img src={logo} alt='Serverless lab - Effective Serverless, AWS Lambda, and Node.js training' width='112' height='28' />
              </a>

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
                <a className='navbar-item' href={`${base}#value-proposition`}>Our offer</a>
                <a className='navbar-item' href={`${base}#why-serverless`}>Why Serverless?</a>
                <a className='navbar-item' href={`${base}#curricula`}>Curricula</a>
                <a className='navbar-item' href={`${base}#instructors`}>Instructors</a>
                <a className='navbar-item' href={`${base}#why-training`}>ROI</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Menu

import { h, Component } from 'preact'

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
      <nav className='navbar '>
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
            <a className='navbar-item ' href='#why-serverless'>
              Why Serverless?
            </a>
            <a className='navbar-item ' href='#curricula'>
              Curricula
            </a>
            <a className='navbar-item ' href='#instructors'>
              Instructors
            </a>
            <a className='navbar-item ' href='#talk-with-us'>
              Talk with us
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu
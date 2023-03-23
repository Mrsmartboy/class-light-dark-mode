import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {onMode: true}

  onClickMode = () => {
    this.setState(prevState => ({onMode: !prevState.onMode}))
  }

  render() {
    const {onMode} = this.state
    const className = onMode ? 'light-mode' : 'dark-mode'
    const header = onMode ? 'heading-light-mode' : 'heading-dark-mode'

    return (
      <div className="container">
        <div className={`card-container ${className}`}>
          <h1 className={header}>Click to Change Mode </h1>
          <button onClick={this.onClickMode} type="button" className="button">
            {onMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

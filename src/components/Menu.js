import React, { Component } from "react";
import { BrowserRouter as Link } from 'react-router-dom'

import '../components_sass/Menu.sass'

class Menu extends Component {
  render() {
    let visibility = 'hide';

    if(this.props.menuVisibility) {
      visibility = 'show';
    }

    return(
      <div id='flyoutMenu'
          onMouseDown={this.props.handleMouseDown}
          className={visibility}>

        <h2><Link to='/'>🏛</Link></h2>
        <h2><Link to='/scannerdashboard'>🐙</Link></h2>
        <h2><Link to='/scannerdashboard'>🐛</Link></h2>
        <h2><Link to='/scannerdashboard'>🦁</Link></h2>

      </div>
    )
  }
}

export default Menu;
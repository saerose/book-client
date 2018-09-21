import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../components_sass/Menu.sass';

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

        <ul>
          <li><Link to='/'>🏛</Link></li>
          <li><Link to='/scannerdashboard'>🙈</Link></li>
          <li><Link to='/scannerdashboard'>🙉</Link></li>
          <li><Link to='/scannerdashboard'>🙊</Link></li>
        </ul>

      </div>
    )
  }
}

export default Menu;
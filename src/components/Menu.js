import React, { Component } from "react";
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

        <h2><a href="#">🏛</a></h2>
        <h2><a href="#">🐙</a></h2>
        <h2><a href="#">🐛</a></h2>
        <h2><a href="#">🦁</a></h2>

      </div>
    )
  }
}

export default Menu;
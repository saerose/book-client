import React, { Component } from "react";
import '../components_sass/MenuButton.sass'

class MenuButton extends Component {
  render() {
    return(
      <button className='menuButton' onMouseDown={this.props.handleMouseDown}>
        <span>🐳</span>
      </button>
    );
  }
}

export default MenuButton;
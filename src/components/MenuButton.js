import React, { Component } from "react";
import '../components_sass/MenuButton.sass'

class MenuButton extends Component {
  render() {
    return(
      <div className='menuButton' onMouseDown={this.props.handleMouseDown}>
        <p>🐳</p>
      </div>
    );
  }
}

export default MenuButton;
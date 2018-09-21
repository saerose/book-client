import React, { Component } from "react";
import '../components_sass/MenuButton.sass'
import menu from '../assets/list.svg';


class MenuButton extends Component {
  render() {
    return(
      <div className='menuButton_wrapper' onMouseDown={this.props.handleMouseDown}>
        <img className='flyoutMenu_img' alt='Menu' src={menu} />
      </div>
    );
  }
}

export default MenuButton;
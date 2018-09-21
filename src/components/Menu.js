import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../components_sass/MenuProfile.sass';
import home from '../assets/house.svg';
import camera from '../assets/camera.svg';
import books from '../assets/book.svg';

import MenuProfile from "./MenuProfile";



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

        <MenuProfile />

        <div className='flyoutMenu_divWrapper'>
          <li className='flyoutMenu_li'>
            <Link to='/'>
              <img className='flyoutMenu_li_img' alt='Home' src={home} />
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/scannerdashboard'>
            <img className='flyoutMenu_li_img' alt='Scan' src={camera} />
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/scannerdashboard'>
            <img className='flyoutMenu_li_img' alt='Books' src={books} />
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/scannerdashboard'>
            <img className='flyoutMenu_li_img' alt='Scan' src={camera} />
            </Link>
          </li>
        </div>

      </div>
    )
  }
}

export default Menu;
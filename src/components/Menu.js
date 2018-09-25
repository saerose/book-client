import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import { GoogleLogout } from 'react-google-login';

import '../components_sass/MenuProfile.sass';
import home from '../assets/startup.svg';
import camera from '../assets/shutter.svg';
import books from '../assets/menu-book.svg';

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

        <div className='flyoutMenu_MenuProfileWrapper'>
          <MenuProfile />
        </div>

        <div className='flyoutMenu_divWrapper'>
          <li className='flyoutMenu_li'>
            <Link to='/'>
              <img className='flyoutMenu_li_img' alt='Home' src={home} />
              <div className='flyoutMenu_li_name'>Home</div>
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/scannerdashboard'>
            <img className='flyoutMenu_li_img' alt='Scan' src={camera} />
            <div className='flyoutMenu_li_name'>Scan</div>
            </Link>
          </li>
          <li className='flyoutMenu_li'>
            <Link to='/library'>
            <img className='flyoutMenu_li_img' alt='Books' src={books} />
            <div className='flyoutMenu_li_name'>Library</div>
            </Link>
          </li>
        </div>

        {/* <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
      /> */}

      </div>
    )
  }
}

export default Menu;
import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import profileBase from '../assets/man.svg';


class MenuProfile extends Component {
  render() {

    return(
        <div className='flyoutMenu_profile'>
          <img className='flyoutMenu_profile_img' alt='Profile' src={profileBase} />
          <div className='flyoutMenu_profile_name'>Your Name</div>
        </div>
    )
  }
}

export default MenuProfile;
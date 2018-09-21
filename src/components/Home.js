import React, { Component } from "react";
import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';

import noteBookImg from '../assets/diary.svg';
// const noteBookImg = require('../assets/diary.svg');


class Home extends Component {
  render() {

    return(
      <div className='Home_wrapper'>
        <div className='Home_wrapper_title'>Ello Bello</div>
        <div className='Home_wrapper_text'>This is the text from home page.</div>
        <img className='Home_wrapper_img' alt='NoteBookImg' src={noteBookImg} />
      </div>
    )
  }
}

export default Home;
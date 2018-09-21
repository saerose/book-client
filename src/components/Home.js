import React, { Component } from "react";
import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';

import openBook from '../assets/open-book.svg';
// const noteBookImg = require('../assets/diary.svg');


class Home extends Component {
  render() {

    return(
      <div className='Home_wrapper'>
        <div className='Home_wrapper_title'>Ello Bello</div>
        <div className='Home_wrapper_text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </div>
        <img className='Home_wrapper_img' alt='OpenBook' src={openBook} />
      </div>
    )
  }
}

export default Home;
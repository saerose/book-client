import React, { Component } from "react";
import { connect } from 'react-redux';
import { logIn } from '../redux/actions';

import GoogleLogin from 'react-google-login';

import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';

import openBook from '../assets/open-book.svg';
// const noteBookImg = require('../assets/diary.svg');


class Home extends Component {
  loginGoogle = ({ profileObj }) => {
    fetch('http://localhost:3001/login/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileObj)
    })
      .then(res => res.json())
      .then(res => {
        this.props.logIn(res)
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className='Home_wrapper'>
        <div className='Home_wrapper_title'>Ello Bello</div>
        <div className='Home_wrapper_text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </div>
        <img className='Home_wrapper_img' alt='OpenBook' src={openBook} />
        {
          !this.props.user.id && (
            <GoogleLogin
              clientId={process.env.GOOGLE_API_KEY}
              buttonText="Login"
              onSuccess={this.loginGoogle}
              onFailure={console.error}
            />
          )
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user))
})

export default connect (mapStateToProps, mapDispatchToProps)(Home);
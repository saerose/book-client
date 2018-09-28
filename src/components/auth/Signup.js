import React, { Component } from "react";
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions';
import GoogleLogin from 'react-google-login';

import '../../components_sass/Menu.sass';
import '../../components_sass/Home.sass';

import openBook from '../../assets/open-book.svg';
import pileBooks from '../../assets/pile-books.svg';


class Signup extends Component {

  loginGoogle = ({ profileObj }) => {
    fetch('http://localhost:3001/login/google', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({profileObj})
    })
      .then(res => res.json())
      .then(res => {
        this.props.logIn(res)
      })
      .catch(err => console.error(err))
  }

  render() {
      return (
        <div className='Home_signup_wrapper'>
          <div className='Home_signup_title'>minerva</div>
          <div className='Home_signup_text'>
            Signup
          </div>
          <img className='Home_wrapper_signup_img' alt='Pile of books' src={pileBooks} />

            <div className='Home_signup_wrapper_googlebutton'>
              <GoogleLogin
                className ='Home_signup_googlebutton'
                clientId='673352715028-kbn3igi1c3sg2apmbf1vos7stdv8n406.apps.googleusercontent.com'
                buttonText="Login with Google"
                onSuccess={this.loginGoogle}
                onFailure={console.error}
              />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

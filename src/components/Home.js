import React, { Component } from "react";
import { connect } from 'react-redux';
import { logIn } from '../redux/actions';
import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';
import openBook from '../assets/open-book.svg';


class Home extends Component {
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
        <div className='Home_wrapper'>
          <div className='Home_wrapper_title'>Welcome!</div>
          <div className='Home_wrapper_text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          </div>
          <img className='Home_wrapper_img' alt='OpenBook' src={openBook} />
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

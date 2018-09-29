import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import history from './history';
import './Root.sass';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ScannerDashboard from './components/ScannerDashboard';
import Result from './components/Result';
import Home from './components/Home';
import SearchBarResults from './components/SearchBarResults';
import LibraryDashboard from './components/LibraryDashboard';


class Root extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router history={history}>
        <div className='App_loginUser'>
          <div>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/home' component={Home}/>
            <Route path='/scannerdashboard' component={ScannerDashboard}/>
            <Route path='/result' component={Result}/>
            <Route path='/searchbarres' component={SearchBarResults} />
            <Route path='/library' component={LibraryDashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

export default connect (mapStateToProps, null)(Root);

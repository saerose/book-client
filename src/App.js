import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import history from './history';
import './App.sass';

import ScannerDashboard from './components/ScannerDashboard';
import Result from './components/Result';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import SearchBarResults from './components/SearchBarResults';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router history={history}>
        <div className='App_loginUser'>
          {
            this.props.user.id
            ? <SearchBar />
            : ''
          }
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/scannerdashboard' component={ScannerDashboard}/>
            <Route path='/result' component={Result}/>
            <Route path='/searchbarres' component={SearchBarResults} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

// const mapDispatchToProps = (dispatch) => ({
//   logIn: (user) => dispatch(logIn(user))
// })

export default connect (mapStateToProps, null)(App);
// export default App;

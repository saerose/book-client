import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import './App.sass';

import ScannerDashboard from './components/ScannerDashboard';
import Result from './components/Result';
import Home from './components/Home';
import SearchBar from './components/SearchBar';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <SearchBar />
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/scannerdashboard' component={ScannerDashboard}/>
            <Route path='/result' component={Result}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

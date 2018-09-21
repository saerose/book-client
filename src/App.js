import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.sass';

import MenuContainer from './components/MenuContainer'
import ScannerDashboard from './components/ScannerDashboard';
import Result from './components/Result';
import Home from './components/Home';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div>
          <div className="App_header">
            <div className='App_header_MenuContainer'><MenuContainer /></div>
            <input type="text" className='App_header_SearchBar' placeholder='Search your next lecture!' />
          </div>

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

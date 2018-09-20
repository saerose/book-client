import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
        <div className='Wrapper'>
          <header className="App_header">
            <div className='App_header_MenuContainer'><MenuContainer /></div>
            <div className='App_header_Title'>This is the title</div>
          </header>

          <Route exact path='/' component={Home} />
          <Route path='/scannerdashboard' component={ScannerDashboard} />
          <Route path='/result' component={Result} />
        </div>
      </Router>
    );
  }
}

export default App;

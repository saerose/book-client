import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './App.sass';

import MenuContainer from './components/MenuContainer'
import ScannerDashboard from './components/ScannerDashboard';
import Result from './components/Result';


class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div className='Wrapper'>
          <Route exact path='/' component={App} />
          <Route path='/scannerdashboard' component={ScannerDashboard} />
          <Route path='/result' component={Result} />
        </div>
      </Router>,

      <div className="App">
        <header className="App_header">
          <div className='App_header_MenuContainer'><MenuContainer /></div>
          <div className='App_header_Title'>This is the title</div>
        </header>
        <div className="App_outerdiv">
          This is the general App where all content goes.
        </div>

      </div>
    );
  }
}

export default App;

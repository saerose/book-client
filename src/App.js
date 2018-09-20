import React, { Component } from 'react';
import './App.sass';

import ScannerDashboard from './components/ScannerDashboard';
import MenuContainer from './components/MenuContainer'

class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">

        <header className="App_header">
          <h1>BookZ</h1>
        </header>
        <MenuContainer />
        <div className="App_outerdiv">
          Content here
          <ScannerDashboard />
        </div>
      </div>
    );
  }
}

export default App;

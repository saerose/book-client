import React, { Component } from 'react';
import './App.sass';

import ScannerDashboard from './components/ScannerDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>BookZ</h1>
        </header>
        <div className="App_outerdiv">
          Content here
          <ScannerDashboard />
        </div>
      </div>
    );
  }
}

export default App;

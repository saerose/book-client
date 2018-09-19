import React, { Component } from 'react';
import './App.css';

import ScannerDashboard from './components/ScannerDashboard';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>BookZ</h1>
        </header>
        <div className="app-outerdiv">
          Content here
          <ScannerDashboard />
        </div>
      </div>
    );
  }
}

export default App;

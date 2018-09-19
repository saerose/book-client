import React, { Component } from 'react';
import './App.css';

import Scanner from './components/Scanner';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>BookZ</h1>
        </header>
        <div className="app-outerdiv">
          This is where all goes.
          <Scanner />
        </div>
      </div>
    );
  }
}

export default App;

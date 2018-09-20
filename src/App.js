import React, { Component } from 'react';
import './App.sass';

import Scanner from './components/Scanner';
import MenuContainer from './components/MenuContainer'
import ScannerDashboard from './components/ScannerDashboard';

class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">

        <header className="App_header">
          <div className='App_header_MenuContainer'><MenuContainer /></div>
          <div className='App_header_Title'>This is the title</div>
        </header>
        <div className="App_outerdiv">
          This is the general App where all content goes.
          <ScannerDashboard />
        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './ScannerDashboard.sass';

import Scanner from './Scanner';

class ScannerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: []
    }
  }

  scan = () => {
    this.setState({scanning: !this.state.scanning});
  }

  onDetected = (result) => {
    this.setState({results: this.state.results.concat([result])});
  }

  render() {
    return (
      <div className="scannerdashboard">
        <div className="scannerdashboard-content">
          <Scanner />
          <button className='scan-button' onClick={this.scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
        </div>
      </div>
    );
  }

}

export default ScannerDashboard;
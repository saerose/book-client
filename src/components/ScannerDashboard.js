import React, { Component } from 'react';
import '../components_sass/ScannerDashboard.sass';

import Scanner from './Scanner';
import Result from './Result';

class ScannerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: []
    }
  }

  _scan = () => {
    this.setState({scanning: !this.state.scanning});
  }

  _onDetected = (result) => {
    this.setState({results: this.state.results.concat([result])});
  }

  render() {
    return (
      <div className="ScannerDashboard">
        <div className="ScannerDashboard_content">
          <Scanner />
          <button className='ScannerDashboard_content_button'
                  onClick={this.scan}> {this.state.scanning ? 'Stop' : 'Start'} </button>
                <ul className="results">
                    {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
                </ul>
                {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
        </div>
      </div>
    );
  }

}

export default ScannerDashboard;
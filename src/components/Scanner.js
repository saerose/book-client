import React, { Component } from 'react';
import Quagga from 'quagga';
import '../components_sass/Scanner.sass';

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }

  onDetectedTest = (result) => {
    this.setState({
      result: result.codeResult.code
    });
    // this.props.onDetected(result);
    console.log('result', result);
  }

  componentDidMount() {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      // Safely access `navigator.mediaDevices.getUserMedia`.
    }

    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment'
        }
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 2,
      decoder: {
        readers: [{
          format: "ean_reader",
          config: {
              supplements: [
                  'ean_5_reader', 'ean_2_reader'
              ]
          }
        }]
      },
      locate: true,
    }, (err) => {
      if(err) {
        Quagga.stop();
        console.error(err);
      } else {
        console.log('working');
      }
      Quagga.start();
    });
    Quagga.onDetected(this.onDetectedTest); //if this._onDetected it brokes
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
}

  render() {
    console.log('render');
    return (
      <div>
      <div className='Scanner'>
        <div id="interactive" className="viewport" />
      </div>
      <div>This is the code: {this.state.result}</div>
      </div>
    );
  }
}

export default Scanner;



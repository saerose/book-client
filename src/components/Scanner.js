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
    this.props.detectedCallback(result.codeResult.code)
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
          width: 480,
          height: 640,
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
    Quagga.onDetected(this.onDetectedTest);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
    Quagga.stop();
}

  render() {
    console.log('render');
    return (
      <div className='Scanner_wrapper'>
        <div className='Scanner_wrapper_video'>
          <div id="interactive" className="viewport" />
        </div>
      <div>Scanner Component — This is the code: </div>
      </div>
    );
  }
}

export default Scanner;



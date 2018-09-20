import React, { Component } from 'react';
import Quagga from 'quagga';
import '../components_sass/Scanner.sass';

class Scanner extends Component {
  // constructor(props) {
  //   super(props);
    /*propTypes: {
        onDetected: React.PropTypes.func.isRequired
    }, */

  onDetected = (result) => {
    console.log('resutl', result);
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
          width: 400,
          height: 400,
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
        console.error(err);
      } else {
        console.log('working');
      }
      Quagga.start();
    });
    Quagga.onDetected(this.onDetected); //if this._onDetected it brokes
    // Quagga.onProcessed(function (result) {
    //   const drawingCtx = Quagga.ctx.overlay;
    //   const drawingCanvas = Quagga.canvas.dom.overlay;

    //   if (result) {
    //     if (result.boxes) {
    //       drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
    //       result.boxes.filter(box => box !== result.box).forEach(box => {
    //         Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
    //       });
    //     }
    //   }
    // })
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
}

  render() {
    console.log('render');
    return (
      <div className="Scanner">
        This is the scanner.
        <div id="interactive" className="viewport">
          {/* <video
            className='videoCamera'
            autoPlay= {true}
            preload='auto'
            muted= {true}
            playsInline= {true}>
          </video>
          <canvas className='drawingBuffer'></canvas> */}
        </div>
      </div>
    );
  }
}

export default Scanner;



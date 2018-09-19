import React, { Component } from 'react';
import Quagga from 'quagga';
// import './App.css';

class Scanner extends Component {

  componentDidMount() {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        constraints: {
          // width: 640,
          // height: 480,
          facing: "environment"
        }
      },
      decoder: {
        readers: [
          'code_128_reader'
        ]
      }, function(err) {
        if (err) {
          console.log(err);
          return;
        }
        // console.log('Initialization finished. Ready to start');
        Quagga.start();
        }
    })
  }

  render() {
    return (
      <div className="scanner">
        This is the scanner.
        <div id="interactive" className="viewport"/>
      </div>
    );
  }
}

export default Scanner;



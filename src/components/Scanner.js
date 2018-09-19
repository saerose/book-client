import React, { Component } from 'react';
import Quagga from 'quagga';
import './Scanner.sass';

class Scanner extends Component {
  // constructor(props) {
  //   super(props);
    /*propTypes: {
        onDetected: React.PropTypes.func.isRequired
    }, */

  // onDetected = (result) => {
  //   this.props.onDetected(result);
  // }

  componentDidMount() {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        constraints: {
          width: 200,
          height: 100,
          facing: "environment"
        }
      },
      decoder: {
        readers: [
          'code_128_reader'
        ]
      },
      function(err) {
        if (err) {
          console.log(err);
          return;
        }
        // console.log('Initialization finished. Ready to start');
        Quagga.start();
        }
    });
    // Quagga.onDetected(this.onDetected);
  }

//   componentWillUnmount() {
//     Quagga.offDetected(this._onDetected);
// }

  render() {
    return (
      <div className="scanner">
        This is the scanner.
        <div id="interactive" className="viewport" />
      </div>
    );
  }
}

export default Scanner;



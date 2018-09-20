import React, { Component } from 'react';
import '../components_sass/Result.sass';

class Result extends Component {

  render() {
    const result = this.props.result;

    if (!result) {
      console.log('Null');
      return null;
    }

    return (
      <div className="Result_outerdiv">
      Result: {result.codeResult.code}
      {/* [{result.codeResult.format}] */}
      </div>
    );
  }

}

export default Result;
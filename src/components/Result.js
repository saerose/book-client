import React, { Component } from 'react';
// import './Result.css';

class Result extends Component {

  render() {
    const result = this.props.result;

    if (!result) {
      return null;
    }

    return (
      <div className="Result_outerdiv">
      {result.codeResult.code}
      {/* [{result.codeResult.format}] */}
      </div>
    );
  }

}

export default Result;
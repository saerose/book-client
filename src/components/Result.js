import React, { Component } from 'react';
// import './Result.css';

class Result extends Component {
  constructor(props) {
    // super(props);
    // this.state = {
    //   result:
    // }
    // result: React.PropTypes.object
  }

  render() {
    const result = this.props.result;

    if (!result) {
      return null;
    }

    return (
      <div className="result-outerdiv">
      {result.codeResult.code} [{result.codeResult.format}]
      </div>
    );
  }

}

export default Result;
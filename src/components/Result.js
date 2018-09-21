import React, { Component } from 'react';
import '../components_sass/Result.sass';

import tombstone from '../assets/tombstone.svg';

class Result extends Component {

  render() {
    const result = this.props.result;

    if (!result) {
      console.log('Null');
      return (
        <div className='Result_null'>
          <img className='Result_null_img' alt='Tombstone' src={tombstone} />
          <div className='Result_null_img'>There is no result.</div>
        </div>
      );
    } else {

    return (
      <div className="Result_outerdiv">
      {/* Result: {result.codeResult.code} */}
      {/* [{result.codeResult.format}] */}
      </div>
    );
    }
  }

}

export default Result;
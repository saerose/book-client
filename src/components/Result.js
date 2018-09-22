import React, { Component } from 'react';
import '../components_sass/Result.sass';

import { onDetectedReducer } from '../redux/actions';
import { connect } from 'react-redux';

import tombstone from '../assets/tombstone.svg';

class Result extends Component {

  render() {
    const result = this.props.results;

    if (!result) {
      console.log('Null');
      return (
        <div className='Result_null'>
          <img className='Result_null_img' alt='Tombstone' src={tombstone} />
          <div className='Result_null_img'>There is no result.</div>
        </div>
      );
    } else {
    console.log('Result working')
    return (
      <div className="Result_outerdiv">
      Result: {result.items.volumeInfo.title}
      </div>
    );
    }
  }

}

const mapStateToProps = (state) => ({
  results: state.results
})

// const mapDispatchToProps = (dispatch) => ({
//   onDetectedReducer: (results) => dispatch(onDetectedReducer(results))
// })

export default connect (mapStateToProps)(Result);
// export default Result;
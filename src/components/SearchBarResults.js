import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/Result.sass';

import SearchResultItem from './SearchResultItem';
import { connect } from 'react-redux';

import tombstone from '../assets/tombstone.svg';

class SearchBarResult extends Component {

  renderResults = (list) => {
    return list.map((el, i) => {
      return (
        <SearchResultItem key={i} {...el.volumeInfo}/>
      )
    })
  }

  render() {
    const result = this.props.list;
    console.log('within result.js', JSON.stringify(this.props.results))
    if (result.length) {
      console.log('Result working')
      return (
        <div>
          {this.renderResults(result)}
        </div>

      );
    } else {
      console.log('Null');
      return (
        <div className='Result_null'>
          <div className='Result_null_title'>Oops!</div>
          <img className='Result_null_img' alt='Tombstone' src={tombstone} />
          <div className='Result_null_text'>Sorry, there is no result.</div>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  list: state.onDetectedReducer.list
})

export default connect (mapStateToProps)(SearchBarResult);
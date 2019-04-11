import React, { Component } from 'react';
import '../components_sass/Result.sass';
import SearchResultItem from './SearchResultItem';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import web from '../assets/spider-web.svg';


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
    if (result.length) {
      return (
        <div className='SearchBarResult'>
          {this.renderResults(result)}
        </div>
      );
    } else {
      return (
        <div className='Result_null'>
          <SearchBar />
          <div className='Result_null_title'>Oops!</div>
          <img className='Result_null_img' alt='Tombstone' src={web} />
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

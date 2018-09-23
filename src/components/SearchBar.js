import React, { Component } from "react";
import { connect } from 'react-redux';

import '../components_sass/Menu.sass';
import '../components_sass/Home.sass';

import MenuContainer from './MenuContainer';
import { onSearch } from '../redux/actions';


class SearchBar extends Component {
  API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
  API_KEY = 'AIzaSyAPODoh7pbgRTLTAWlaQkFBbqbTadJsz1U'

  performSearch = (str) => {
    if (str.length) {
      fetch(`${this.API_URL}${str.replace(' ', '+')}&maxResults=40&key=${this.API_KEY}`)
        .then(res => res.json())
        .then(res => this.props.saveResults(res.items))
    } else {
      this.props.saveResults([])
    }
  }

  debounce = (callback, str) => {
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => callback(str), 300)
  }

  render() {

    return(
      <div className="App_header">
        <div className='App_header_MenuContainer'><MenuContainer /></div>
        <input
          onKeyUp={(e) => this.debounce(this.performSearch, e.target.value)}
          type='text'
          className='App_header_SearchBar'
          placeholder='Search your next lecture!' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveResults: (list) => dispatch(onSearch(list))
})

export default connect(null, mapDispatchToProps)(SearchBar);
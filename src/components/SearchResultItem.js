import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/Result.sass';


class SearchResultItem extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.title}</div>
      </div>
    )
  }

}

export default SearchResultItem;
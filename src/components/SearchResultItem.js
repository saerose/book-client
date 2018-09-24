import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/SearchBarResultItem.sass';


class SearchResultItem extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='SearchResult_wrapper'>
        <div className='SearchResult_img_wrapper'>
          <img className='SearchResult_img' alt='Book cover' src={this.props.imageLinks.thumbnail} />
        </div>

        <div className='SearchResult_info_wrapper'>
          <div className='SearchResult_title'>{this.props.title}</div>
          <div className='SearchResult_subtitle'>{this.props.subtitle}</div>
          <div className='SearchResult_author'> by {this.props.authors}</div>

          <StarRatings
            rating={this.props.averageRating}
            starRatedColor="#F8E473"
            changeRating={this.changeRating}
            numberOfStars={5}
            starDimension={20}
            starSpacing={2}
            name='rating'
          />
        </div>
      </div>
    )
  }

}

export default SearchResultItem;
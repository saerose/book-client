import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import '../components_sass/Result.sass';

import { connect } from 'react-redux';

import tombstone from '../assets/tombstone.svg';

class Result extends Component {
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    const result = {"kind":"books#volume","id":"F9ybAgAAQBAJ","etag":"VTVItL6yr6Q","selfLink":"https://www.googleapis.com/books/v1/volumes/F9ybAgAAQBAJ","volumeInfo":{"title":"JavaScript","subtitle":"The Good Parts","authors":["Douglas Crockford"],"publisher":"\"O'Reilly Media, Inc.\"","publishedDate":"2008-05-08","description":"Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9780596517748"},{"type":"ISBN_10","identifier":"0596517742"}],"readingModes":{"text":false,"image":false},"pageCount":153,"printType":"BOOK","categories":["Computers"],"averageRating":4,"ratingsCount":8,"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"preview-1.0.0","imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=F9ybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=F9ybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.es/books?id=F9ybAgAAQBAJ&dq=isbn:9780596517748&hl=&cd=1&source=gbs_api","infoLink":"http://books.google.es/books?id=F9ybAgAAQBAJ&dq=isbn:9780596517748&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/JavaScript.html?hl=&id=F9ybAgAAQBAJ"},"saleInfo":{"country":"ES","saleability":"NOT_FOR_SALE","isEbook":false},"accessInfo":{"country":"ES","viewability":"NO_PAGES","embeddable":false,"publicDomain":false,"textToSpeechPermission":"ALLOWED","epub":{"isAvailable":false},"pdf":{"isAvailable":false},"webReaderLink":"http://play.google.com/books/reader?id=F9ybAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api","accessViewStatus":"NONE","quoteSharingAllowed":false},"searchInfo":{"textSnippet":"Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods."}}//this.props.results;
    console.log('within result.js', JSON.stringify(this.props.results))
    if (result) {
      console.log('Result working')
      return (
        <div>

        <div className="Result_topinfo_outerdiv">
          <div className="Result_img_outerdiv">
            <img className='Result_img' src={result.volumeInfo.imageLinks.thumbnail} />
            <div className='Result_topinfo_wrapper'>
              <div className='Result_topinfo_wrapper_categories'>{result.volumeInfo.categories}</div>
              <div className='Result_topinfo_wrapper_title'>{result.volumeInfo.title}</div>
              <div className='Result_topinfo_wrapper_subtitle'>{result.volumeInfo.subtitle}</div>

              <div className='Result_topinfo_wrapper_authors'>by {result.volumeInfo.authors}</div>
              <div className='Result_topinfo_wrapper_rating'>
                <StarRatings
                  rating={result.volumeInfo.averageRating}
                  starRatedColor="#F8E473"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  starDimension={22}
                  starSpacing={2}
                  name='rating'
                />
              </div> 000 Reviews
            </div>
          </div>
        </div>

        <div className='Result_bottominfo_outerdiv'>
          <div className='Result_bottominfo_sinopsis'>Synopsis</div>
          <div className='Result_TextSnippet'>" {result.searchInfo.textSnippet} "</div>
        </div>

        <div className='Result_bottominfo_outerdiv'>
          <div className='Result_bottominfo_sinopsis'>Reviews</div>
          <div className='Result_TextSnippet'>" {result.searchInfo.textSnippet} "</div>
        </div>
      </div>

      );
    } else {
      console.log('Null');
      return (
        <div className='Result_null'>
          <img className='Result_null_img' alt='Tombstone' src={tombstone} />
          <div className='Result_null_text'>There is no result.</div>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => ({
  results: state.onDetectedReducer.results
})

// const mapDispatchToProps = (dispatch) => ({
//   onDetectedReducer: (results) => dispatch(onDetectedReducer(results))
// })

export default connect (mapStateToProps)(Result);
// export default Result;
import React, { Component } from 'react';
import '../components_sass/LibraryDashboardItem.sass'

class LibraryDashboardItem extends Component {

  render() {
    return (
        <div className='library_recentlyadded'>
          <div className='library_recentlyadded_title'>Recently added</div>
          <div className='library_recentlyadded_item'>This is the list of books that you just added.</div>
        </div>
    );
  }
}

export default LibraryDashboardItem;
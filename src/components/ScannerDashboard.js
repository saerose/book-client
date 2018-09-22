import React, { Component } from 'react';
import '../components_sass/ScannerDashboard.sass';
import { connect } from 'react-redux';
import Scanner from './Scanner';
import Result from './Result';

import { onDetectedReducer } from '../redux/actions';

class ScannerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: []
    }
  }

  // Receives isbn and sends to API.
  //Scanner — we are sending it in the props.
  executeFetch = (isbn) => {
    console.log('this is the fetch', isbn)
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    const apiKey = 'AIzaSyAPODoh7pbgRTLTAWlaQkFBbqbTadJsz1U'
    fetch(BASE_URL + isbn + '&key=' + apiKey)
      .then(results => results.json())
      .then(console.log)
      .then(results => this.props.onDetectedReducer(results))
  }

  // _scan = () => {
  //   this.setState({scanning: !this.state.scanning});
  // }

  // _onDetected = (result) => {
  //   this.setState({results: this.state.results.concat([result])});
  // }


  render() {
    return (
      <div className="ScannerDashboard">
        <div className="ScannerDashboard_content">
          <Scanner detectedCallback={this.executeFetch} />
          {/* <button className='ScannerDashboard_content_button'
                  onClick={this.scan}> {this.state.scanning ? 'Stop' : 'Start'} </button> */}
                {/* <ul className="results">
                    {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
                </ul>
                {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null} */}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  results: state.results
})

const mapDispatchToProps = (dispatch) => ({
  onDetectedReducer: (results) => dispatch(onDetectedReducer(results))
})

export default connect (mapStateToProps, mapDispatchToProps)(ScannerDashboard);
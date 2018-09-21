import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


  ReactDOM.render(
    <Provider store={store}>
      {/* <Router> */}
        <App/>
      {/* </Router> */}
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();

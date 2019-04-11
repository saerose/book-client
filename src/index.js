import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


  ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import Deer from './reducers';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(Deer);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();

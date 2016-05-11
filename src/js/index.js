import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { UrlShortener } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();
let store = createStore(UrlShortener, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

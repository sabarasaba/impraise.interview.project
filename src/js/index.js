import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { UrlShortener } from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';

const loggerMiddleware = createLogger();

const createPersistentStore = compose(
  persistState(undefined, {
    merge(initial, persisted) {
      return persisted ? persisted : [];
    }
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)(createStore);

const store = createPersistentStore(UrlShortener);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

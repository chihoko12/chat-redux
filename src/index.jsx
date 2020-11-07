// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messageReducer from './reducers/message_reducer';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

const username = window.prompt('what is s your username?')

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: username || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
}

const reducers = combineReducers({
  messages: messageReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

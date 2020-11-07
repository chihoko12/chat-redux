// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messageReducer from './reducers/message_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

const identifyReducer = (state = null) => state;

const username = prompt('what is s your username?')

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: username || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
}

const reducers = combineReducers({
  messages: messageReducer,
  channels: identifyReducer,
  currentUser: identifyReducer,
  selectedChannel: selectedChannelReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

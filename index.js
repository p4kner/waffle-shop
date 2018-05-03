import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducer from './app/reducers';

import WaffleShop from './WaffleShop';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

/**
* Root node of application which connects to redux.
*/
const App = () => (
  <Provider store={store}>
    <WaffleShop/>
  </Provider>
);



AppRegistry.registerComponent('WaffleShop', () => App);

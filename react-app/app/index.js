import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider }  from 'react-redux'

import Root from './components/Root'
import { reducer, getData } from './reducers/counter'

import createLogger from 'redux-logger'

import promise from 'redux-promise';

import fetch from 'isomorphic-fetch'

const loggerMiddleware = createLogger()

export var store = createStore(reducer,
  applyMiddleware(
    promise, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))

render(
    <Provider store={store}>        
       <Root />
    </Provider>,    
   document.getElementById('app')

)

//store.dispatch({type: 'DATA_SUCCESS', payload: 5})
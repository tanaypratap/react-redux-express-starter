import React, { Component, PropTypes } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Welcome from './Welcome'
import CounterContainer from '../containers/CounterContainer'
import App from './App'

export var routes = (
    <Route component={App}>
            <Route path='counter' component={CounterContainer} />
            <Route path='/' component = {Welcome} />
    </Route>
    )

var Root = ({children}) => (
     <Router history={browserHistory} routes={routes} />     
)
   
export default Root
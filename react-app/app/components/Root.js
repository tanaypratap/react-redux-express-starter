import React, { Component, PropTypes } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Welcome from './Welcome'
import CounterContainer from '../containers/CounterContainer'
import App from './App'

var Root = ({children}) => (
     <Router history={browserHistory}>
        <Route component={App}>
            <Route path='counter' component={CounterContainer} />
            <Route path='/' component = {Welcome} />
        </Route>
    </Router>

)
   
export default Root
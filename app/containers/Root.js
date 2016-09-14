import React, { Component, PropTypes } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Welcome from '../components/Welcome'
import CounterContainer from './CounterContainer'
import App from '../components/App'

var Root = React.createClass({
    render: function(){
        const {children} = this.props
        return (
                 <Router history={browserHistory}>
                    <Route component={App}>
                        <Route path='counter' component={CounterContainer} />
                        <Route path='/' component = {Welcome} />
                    </Route>
                </Router>

            )
    }
})

export default Root
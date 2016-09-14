import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

var Welcome = React.createClass({
    render: function(){
        return (
             <div className="container">
                <div className="jumbotron" style= {{backgroundColor :'transparent'}}> 
                    <h2 className="text-center"> Welcome to Counter App  </h2>                     
                     <br/> <p className="text-right"> Counter App to show redux and react working! </p>                    
                </div>
            </div>
        )
    }
})

var App = React.createClass({
    render: function(){
        const {children} = this.props
        return (
                <div>
                    
                    <div className="container navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <li> <Link to="/" > Home </Link> </li>
                            <li> <Link to="/counter"> Counter </Link> </li>
                        </ul>
                    </div>  
                        
                   

                    {children}
                </div>

               

            )
    }
})


var ReduxCounter = React.createClass({
    render: function() {
        const { count, onIncrement, onDecrement} = this.props
        return (
            <div className="container">
                <div className="jumbotron" style= {{backgroundColor :'transparent'}}> 
                    <h2 className="text-center"> Current Count : {count}  </h2>                     
                    <button onClick={onIncrement} className="btn-lg btn-success btn-block"> Click to increase count </button>
                    <button onClick={onDecrement} className="btn-lg btn-danger btn-block"> Click to decrease count </button>
                     <br/> <p className="text-right"> Counter App to show redux and react working! </p>
                </div>
            </div>
        )
    }
});

ReduxCounter.propTypes = {

    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}


// Redux Reducer
var counter = (state=0, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// Creatig Redux Store
import { createStore } from 'redux'

const store = createStore(counter)
const app = document.getElementById('app')

// Using connect method
import { connect } from 'react-redux'
import { Provider }  from 'react-redux'

const mapStateToProps = (state) => {
   return { count : state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : () => {
            dispatch({type: 'INCREMENT'})
        },

        onDecrement : () => {
            dispatch({type: 'DECREMENT'})
        }
    }
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter) // the store subscription is done here when you match state to Props


// React DOM part
// React Router 

import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
const render = () => ReactDOM.render(
    <Provider store={store}>        
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path='counter' component={CounterContainer} />
                <Route path='/' component = {Welcome} />
            </Route>
        </Router>
    </Provider>,    
    app

)

// Initial render
render()

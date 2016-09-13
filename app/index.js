import React, { Component, PropTypes } from 'react'

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
)(ReduxCounter)


// React DOM part
import ReactDOM from 'react-dom'
const render = () => ReactDOM.render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,    
    app

)

// Initial render
render()

// Subscribe to store changes
store.subscribe(render)

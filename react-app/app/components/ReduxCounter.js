import React, { PropTypes } from 'react'
import CounterForm from './Form'

const ReduxCounter = ({ count, onIncrement, onDecrement, onAsyncCall}) =>  (
    <div className="container">
        <div className="jumbotron" style= {{backgroundColor :'transparent'}}> 
            <h2 className="text-center"> Current Count : {count}  </h2>  
            <CounterForm />
            <button onClick={onIncrement} className="btn-lg btn-success btn-block"> Click to increase count </button>
            <button onClick={onDecrement} className="btn-lg btn-danger btn-block"> Click to decrease count </button>
            <button onClick={onAsyncCall} className="btn-lg btn-info btn-block"> Click to fire async call </button>
            <br/> <p className="text-right"> Counter App to show redux and react working! </p>
        </div>
    </div>
)


ReduxCounter.propTypes = {

    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onAsyncCall: PropTypes.func.isRequired
}

export default ReduxCounter
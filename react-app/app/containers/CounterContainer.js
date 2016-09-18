import ReduxCounter from '../components/ReduxCounter'
import { connect } from 'react-redux'
import { getRandomNumber } from '../reducers/counter'

const mapStateToProps = (state) => {
   return { count : state.counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : () => {
            dispatch({type: 'INCREMENT'})
        },

        onDecrement : () => {
            dispatch({type: 'DECREMENT'})
        },

        onAsyncCall : () => {
                dispatch(getRandomNumber()).then((response) => {
                    if (!response.error) {
                        let number = response.payload.number                    
                        dispatch({type: 'DATA_SUCCESS', payload: number})
                    }

                    else {
                        dispatch({type: 'DATA_ERROR'})
                    }
                   
            });

            
            
        }
    }
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCounter) // the store subscription is done here when you match state to Props


export default CounterContainer
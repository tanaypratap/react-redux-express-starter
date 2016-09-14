import ReduxCounter from '../components/ReduxCounter'
import { connect } from 'react-redux'

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


export default CounterContainer
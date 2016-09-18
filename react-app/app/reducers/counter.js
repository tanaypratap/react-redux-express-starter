import { combineReducers } from 'redux'
import { reducer as formReducer }  from 'redux-form' 

// Redux Reducer
export const counter = (state=0, action) => {

    switch(action.type) {
        case 'INCREMENT':
            return state + 1
            
        case 'DECREMENT':
            return state - 1 

        case 'GET_DATA':
            console.log('Loading....')
            return state

        case 'DATA_LOADING':
            console.log('Data is loading')
            return state     

        case 'DATA_SUCCESS':
            console.log('Data loaded:', action.payload)
            return state + action.payload

        case 'DATA_ERROR':
            console.log('Error in call')
            return state

        default:
            return state
    }
}


// Redux Async Action
export function getRandomNumber() {

    const request = fetch('http://localhost:3000/random')
                    .then((response) => response.json())

    return {
        type: 'GET_DATA',
        payload: request
    }
}

var reducers = {
    counter : counter,
    form: formReducer
}

export var reducer = combineReducers(reducers)


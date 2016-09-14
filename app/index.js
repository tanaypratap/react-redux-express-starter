import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider }  from 'react-redux'

import Root from './containers/Root'
import counter from './reducers'


let store = createStore(counter)



render(
    <Provider store={store}>        
       <Root />
    </Provider>,    
   document.getElementById('app')

)


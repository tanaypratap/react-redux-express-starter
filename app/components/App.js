import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const App = ({children}) =>  (
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

export default App
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

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

export default App
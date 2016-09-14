import React from 'react'
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

export default Welcome
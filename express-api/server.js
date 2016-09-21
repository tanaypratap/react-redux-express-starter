import express from 'express'
import path from 'path'
import React from 'react'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { counter } from '../react-app/app/reducers/counter'
import { renderToString } from 'react-dom/server'
import Root from '../react-app/app/components/Root'
import {routes} from '../react-app/app/components/Root'
import cors from 'cors'

var server = express()
server.use(cors())
server.use(express.static('../react-app'));

let apiV1 = express.Router()

apiV1.get('/random', (req,res) => {
    res.json({number: Math.floor(Math.random()*20 + 1)})
})


server.use('/api/v1', apiV1)

server.use(handleRender)


function handleRender(req, res) {

    //TODO: res.flush to flush early data to client
    
    const store = createStore(counter)

    match({ routes, location:req.url}, (error, redirectLocation, renderProps) => {
        if(renderProps) {

            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}>
                        <Root />
                    </RouterContext>
                </Provider>
                )
            const preloadedState = store.getState()

            res.send(renderFullPage(html, preloadedState))

        }
    })
    
}

function renderFullPage(html, preloadedState) {

    return `
        <!DOCTYPE html> 
            <html lang="en">
            <head> 
                <meta charset="UTF-8">
                <title> Test App </title>                
                <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
            </head>

            <body>
                <div id="app">${html}</div>
                <script type="text/javascript" src="dist/index_bundle.js"></script></body>

            </body>
    `
}


server.get('/', (req, res) => {
    res.send(`Welcome to Server <br/>
        And there's text on line change as well`)
})


server.listen(8000, () => {
    console.log('App is listening on port 8000')
})

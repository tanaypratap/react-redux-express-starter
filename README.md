
<img src="https://react-redux.herokuapp.com/logo.jpg" width="150" align="right">
react-redux-express starter kit
========================
An opinionated starter kit for full stack react with redux and expressjs at background. Inbuilt tools like webpack, babel, es6, bower etc. configured.

## Install
Download the zip from github, copy or rename to a new folder of your project name.
Delete the contents of index.js (if you don't need the demo app) and start working.


## Currently Supports
* React
* ReactDOM
* Redux
* Redux-React
* React Router
* Babel
* Webpack
* Bootstrap
* redux-promise
* fetch

out of the box. 

## Run the starter kit

### Development

#### For React-Redux frontend app
    cd react-app
    npm install
    npm start

#### For Express Backend REST API app
    cd express-api
    npm install
    npm start

This starts webpack dev server. Open your favorite browser and goto http://localhost:8080 to see it running. Hot reloading is configured so changes will be reflected as soon as saved.

All js file is transpiled and then bundled into index_bundle.js which is then inserted into index.html.

### Demo app

* You will see a small counter app. While the logic is simple, this app currently implements all redux concepts with react rendering. 
* It tries to provide a basic app structure boilerplate as well to help new users structure their apps.
* All react components are written using functional paradigm.
* It has react router implemented with Redux bindings and has two pages with nested routes.
* Updated demo app to get aysnc calls with Redux
* A simple expressjs backend to show how a react app will work with backend REST APIs.
* App serves as a test that all libraries are working perfectly.

### Full Stack Architecture
Currently webpack is serving the front end app but it can be served by any server (NGINX, Apache) as the final app is just two files, index.html and index_bundle.js along with bower_components folder.

Once this app gets downloaded on client's machine it sends request to the REST API server. This server currently is implemented using Express JS and there's no database attached to it. However, this is a completely separated backend and can be done like any usual Node/Java/PHP etc. backend with Oracle/Mongo/MySQL database interaction.

### Production
    npm run production
   
Webpack minifies and bundles the file together for production usage.
TODO: 

### TODOS
* Rip off all console.log when preparing the file for production.

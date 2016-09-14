
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

out of the box. 

## Run the starter kit

### Development
    npm install
    npm start

This starts webpack dev server. Open your favorite browser and goto http://localhost:8080 to see it running. Hot reloading is configured so changes will be reflected as soon as saved.

All js file is transpiled and then bundled into index_bundle.js which is then inserted into index.html.

### Demo app

* You will see a small counter app. While the logic is simple, this app currently implements all redux concepts with react rendering. 
* It tries to provide a basic app structure boilerplate as well to help new users structure their apps.
* All react components are written using functional paradigm.
* It has react router implemented with Redux bindings and has two pages with nested routes.
* App serves as a test that all libraries are working perfectly.

### Production
    npm run production
   
Webpack minifies and bundles the file together for production usage.
TODO: 

### TODOS
* Rip off all console.log when preparing the file for production.
* Prepare Express bindings
* Update demo app to get async calls addressed by Redux as well
* Basic boilerplate stuff for full stack app structure
* Serving file from Express, after Express is running.

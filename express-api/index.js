var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.get('/', function(req, res) {
    res.send("Welcome to REST API Server");
})

app.get('/random', function(req,res) {
    res.json({number: Math.floor(Math.random()*20 + 1)});
})

app.listen(3000, function (){
    console.log('App is listening on port 3000');
});

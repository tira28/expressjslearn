var express = require('express');
var app = express();
var logger = require('morgan');
var apiRouter = require('./routes/apiRouter');

app.use(logger('combined'));

/**
app.get('/olivia', function(req,res){
  console.log("Incoming request from: " + req.ip);
  res.send("Welcome to Olivia web page");
});

app.use(function(req,res){
  res.status(404).send("Page not found");
});
**/

app.use('/api', apiRouter);

// creating server
var port = process.env.PORT || 3000 ;
app.listen(port);

var express = require('express');
var api = express.Router();
var jsonQuery = require('json-query');

var ALLOWED_IPS = [
  "127.0.0.1",
  "123.456.7.89"
];

var usersData = [{
    name: 'Tira',
    job: 'software engineer',
    office: 'amsterdam'
  },
  {
    name: 'Bram',
    job: 'lawyer',
    office: 'utrecht'
  }
]

api.use(function(req,res,next){
  var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
  if (!userIsAllowed){
    res.status(401).send("Not Authorized");
  } else {
    next();
  }
});

api.get('/users', function(req,res){
  res.json(usersData);
});

api.get('/users/:name', function(req,res){
  var userName = String(req.params.name);
  console.log(usersData.find(function(data){
    data.name === userName;
  }));
  res.send();
});

module.exports = api;

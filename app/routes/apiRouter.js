var express = require('express');
var api = express.Router();
var jsonQuery = require('json-query');


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
];


api.get('/users', function(req,res){
  res.json(usersData);
});

api.get('/users/:name', function(req,res){
  var userName = String(req.params.name);
  var userIndex = usersData.findIndex(user=>user.name==userName);
  if(usersData[userIndex]){
    res.json(usersData[userIndex]);
  } else {
    res.send('user is not found');
  }
});


module.exports = api;

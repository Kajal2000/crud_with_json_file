// var express = require('express');
// var app = express();
// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });
// app.listen(3000);

//################################################################
// get data 
const express = require('express');
const app = express();
let contacts = require('./data');
app.get('/api/contacts', (request, response) => {
  if (!contacts) {
    response({ message: 'No contacts found.' });
  }
  response.json(contacts);
});
app.listen(3001);



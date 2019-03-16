const port = 8080
const express = require('express')
const path = require('path')
const app = express()
app.use(
  express.static(__dirname)
);
app.get('*/', function(req, res) {
  console.log('OK')
  res.sendFile(__dirname + '/index.html');
});
app.listen(port)

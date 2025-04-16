var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello, Api is Live and everything works now!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

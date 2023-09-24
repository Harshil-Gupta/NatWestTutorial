var http = require('http');
var fs = require('./data');

http.createServer(function (req, res) {
    res.write(JSON.stringify(fs));
    return res.end();
  }).listen(5501);

console.log("I'm working fine!")
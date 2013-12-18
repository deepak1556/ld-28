var ecstatic = require('ecstatic')(__dirname)
var http = require('http')
var URL = require('url')

http.createServer(function(req, res) {
  var url = URL.parse(req.url).pathname;

  ecstatic(req, res, function(err) {
    res.statusCode = 404
    res.end('404 not found :(')
  })
}).listen(9966, function() {
  console.log('listening on http://localhost:9966')
})

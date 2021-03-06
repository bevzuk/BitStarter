var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function (request, response) {
    var html = fs.readFile('index.html', 'utf8', function (err, data) {
        if (err) {
            response.send(err);
        }
        response.send(data);
    });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
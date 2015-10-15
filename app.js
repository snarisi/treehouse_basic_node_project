//read data
//parse data
//print data

var http = require('http');
var username = 'samuelnarisi';

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
  console.log(response.statusCode);
  var body = "";
  response.on('data', function(chunk) {
    body += chunk;
  });
  response.on('end', function() {
    body = JSON.parse(body);
    printData(body.name, body.badges.length, body.points.JavaScript);
  });
});

function printData(user, badges, points) {
  var message = user + " has " + badges + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}
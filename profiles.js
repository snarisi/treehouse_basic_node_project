var http = require('http');
var https = require('https');
var printer = require('./printer');

function get(username, topic) {
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          body = JSON.parse(body);
          printer.data(body.name, body.badges.length, body.points[topic], topic);
        } catch(error) {
          printer.error(error, "Error: Could not read profile data for " + username);
        }
      } else {
        printer.error({message: "Error getting profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  request.on('error', function(error) {
    printer.error(error, "Error: Could not connect to server");
  });
}

module.exports.get = get;
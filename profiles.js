var http = require('http');

function get(username, topic) {
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          body = JSON.parse(body);
          printData(body.name, body.badges.length, body.points[topic], topic);
        } catch(error) {
          printError(error, "Error: Could not read profile data for " + username);
        }
      } else {
        printError({message: "Error getting profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  request.on('error', function(error) {
    printError(error, "Error: Could not connect to server");
  });
}

function printData(user, badges, points, topic) {
  var message = user + " has " + badges + " total badge(s) and " + points + " points in " + topic + ".";
  console.log(message);
}

function printError(error, explanation) {
  if (explanation) {
    error.message = explanation + " (" + error.message + ")";
  }
  console.error(error.message);
}

module.exports.get = get;
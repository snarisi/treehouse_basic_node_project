var http = require('http');

function get(username) {
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          body = JSON.parse(body);
          printData(body.name, body.badges.length, body.points.JavaScript);
        } catch(error) {
          //TODO: make erorr more user friendly
          printError(error);
        }
      } else {
        printError({message: "Error getting profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  request.on('error', printError);
}

function printData(user, badges, points) {
  var message = user + " has " + badges + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}

function printError(error) {
  console.error(error.message);
}

module.exports.get = get;
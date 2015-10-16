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

module.exports.data = printData;
module.exports.error = printError;
var profiles = require('./profiles');

var users = process.argv.slice(3);
var topic = process.argv[2];
users.forEach(function(user) {
  profiles.get(user, topic);
});
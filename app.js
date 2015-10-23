var profiles = require('./profiles');

//accepts topic area as first command line argument
var topic = process.argv[2];

//accepts variable number of users as second/third/etc CL args
var users = process.argv.slice(3);

users.forEach(function(user) {
  profiles.get(user, topic);
});
var profiles = require('./profiles');
//profiles.get(process.argv[2]);

var users = process.argv.slice(3);
var topic = process.argv[2];
users.forEach(function(user) {
  profiles.get(user, topic);
});

//TODO: put all printer functionality into its own module
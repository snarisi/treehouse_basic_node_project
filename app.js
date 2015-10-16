var profiles = require('./profiles');
//profiles.get(process.argv[2]);

var users = process.argv.slice(2);
users.forEach(profiles.get);
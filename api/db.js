const mongoose = require('mongoose');
const mongoHost = 'mongodb://127.0.0.1:27017/';

mongoose.connect(mongoHost, {
	user: "root",
	pass: "password",
	dbName: "xchangerepo",
	useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to MongoDB successful!');
});

module.exports = mongoose.connection;
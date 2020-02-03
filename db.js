const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', {
	user: "root",
	pass: "password",
	dbName: "scrapper",
	useNewUrlParser: true
});

module.exports = mongoose.connection;

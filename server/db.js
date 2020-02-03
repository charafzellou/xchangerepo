const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', {
	user: "root",
	pass: "password",
	dbName: "moviesdb",
	useNewUrlParser: true
}).catch(e => console.log(e));

module.exports = mongoose.connection;

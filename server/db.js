const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb', {
	user: "root",
	pass: "password",
	dbName: "moviesdb",
	useNewUrlParser: true
}).catch(e => console.log(e));

module.exports = mongoose.connection;

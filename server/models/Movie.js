const db = require('../db');
const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
        Title: String,
        Category: String,
        Description: String
},
{ collection: 'Sakila_films'}
);

const Movie = db.model('Sakila_films', MovieSchema);

module.exports = Movie;

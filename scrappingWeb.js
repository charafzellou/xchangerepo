const http = require('http');
const https = require('https');
const Post = require('./models/Post');
const cheerio = require('cheerio');

const url = "https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP";
const config = {method: "GET"};

const request = https.request(url, config, function(response){
	console.log('Status Code: ' + response.statusCode);
	let data = "";
	response.on('data', function(chunk){
		data += chunk;
	});
	response.on('end', function(){
		const $ = cheerio.load(data);
		
		
	});
});

request.end();

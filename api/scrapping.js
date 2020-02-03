const http = require('http');
const https = require('https');
const Post = require('./models/Post');

const url = "https://9gag.com/v1/group-posts/group/default/type/trending";
const config = {method: "GET", headers: {accept: "application/json"}};

const request = https.request(url, config, function(response){
	console.log('Status Code: ' + response.statusCode);
	let data = "";
	response.on('data', function(chunk){
		data += chunk;
	});
	response.on('end', function(){
		const result = JSON.parse(data);
		const posts = result.data.posts.map(
		item => { return {
				title: item.title,
				type: item.type
			};
		});
		posts.forEach( post => {
			const model = new Post(post);
			model.save().catch(e => console.log(e));
			console.log(post);
		});
	});
});

request.end();

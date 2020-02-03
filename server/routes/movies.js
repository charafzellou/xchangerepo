const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
	Movie.find().then(data => response.json(data));
});

router.get('/:id', (request, response) => {
	Movie.findOne({name: request.params.id}).then(data => response.json(data));
});

router.post('/', (request, response) => {
	const movie = new Movie(request.body);
	movie.save(request.body)
		.then(movie => res.status(201).json(movie))
		.catch(error => { if(error.name === "ValidationError") {
			response.status(400).json(error.errors);
			} else {
				response.sendStatus(500);
			}
	});
});

router.delete('/:id', (request, response) => {
	Movie.deleteOne({name: request.params.id}).then(() => response.sendStatus(204));
});

router.put('/:id', (request, response) => {
	Movie.findByIdAndUpdate({Title: request.params.id}, request.body)
		.then(data => response.json(...data, ...req.body));
});

module.exports = router;

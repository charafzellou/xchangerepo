const express = require('express');
const router = express.Router();
const CoinTickerModel = require('../models/CoinTicker')

router.get('/', (request, response) => {
	CoinTickerModel.find().then(data => response.json(data));
});

router.get('/:id', (request, response) => {
	CoinTickerModel.findOne({coin_id: request.params.id}).then(data => response.json(data));
});

router.post('/', (request, response) => {
	const coinTicker = new CoinTickerModel(request.body);
	console.log('################');
	console.log(coinTicker);
	console.log('################');
	coinTicker.save(request.body)
		.then(coinTicker => res.status(201).json(coinTicker))
		.catch(error => { if(error.name === "ValidationError") {
			response.status(400).json(error.errors);
			} else {
				response.sendStatus(500);
			}
	});
});

router.delete('/:id', (request, response) => {
	CoinTickerModel.deleteOne({coin_id: request.params.id})
	.then(() => response.sendStatus(204));
});

router.put('/:id', (request, response) => {
	CoinTickerModel.findByIdAndUpdate(
		{coin_id: request.params.id}, request.body)
		.then(data => response.json(...data, ...req.body));
});

module.exports = router;

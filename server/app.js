const express = require('express');
const bodyparser = require('body-parser');
const tickerRouter = require('./routes/coinTickers');
const app = express();

app.use(bodyparser.json());

app.use((request, response, next) => {
	console.log(request.headers);
	next();
	}
);

app.use('/tickers', tickerRouter);

app.listen(3000, () => console.log('Listening on 3000: ' + Date.now()));

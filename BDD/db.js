const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', {
	user: "root",
	pass: "password",
	dbName: "xchangerepo",
	useNewUrlParser: true
});
module.exports = mongoose.connection;

const CoinTickerSchema = mongoose.Schema({
        coin_id : String,
        coin_name: String,
        currency: String,
        currency_name: String,
        time_stamp: String,
        last_price: String,
        price_24hr_pcnt: String,
        volume_24hr: String,
        vol_24hr_pcnt: String
});

const CoinTicker = db.model('CoinTicker', CoinTickerSchema);
module.exports = CoinTicker;
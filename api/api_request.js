var request = require("request");
var db = require("./db");
var CoinTickerModel = require("./CoinTicker");

const RapidAPIconfig = {
  method: 'GET',
  url: 'https://bravenewcoin-v1.p.rapidapi.com/ticker',
  qs: {show: 'eur', coin: 'btc'},
  headers: {
    'x-rapidapi-host': 'bravenewcoin-v1.p.rapidapi.com',
    'x-rapidapi-key': '5e4bcad91cmshf1dee1cbf607bdcp1d005fjsn2e4625344cae'
  }
};

function RapidAPIrefine(result) {
  delete result.success;
  delete result.source;
  delete result.utc_date;
  return result;
}

function RapidAPIdefine(result) {
  var newEntry = new CoinTickerModel(
    {
      coin_id : result.coin_id,
      coin_name: result.coin_name,
      currency: result.currency,
      currency_name: result.currency_name,
      time_stamp: result.time_stamp,
      last_price: result.last_price,
      price_24hr_pcnt: result.price_24hr_pcnt,
      volume_24hr: result.volume_24hr,
      vol_24hr_pcnt: result.vol_24hr_pcnt
    }
  );
  return newEntry;
}

function RapidAPIsave(newEntry) {
  newEntry.save(function (err, newEntry) {
    if (err) return console.error(err);
    newEntry.speak();
  });
}

request(RapidAPIconfig, function (error, response, body) {
	if (error) throw new Error(error);
  const result = JSON.parse(body);
  RapidAPIsave(RapidAPIdefine(RapidAPIrefine(result)));  
});

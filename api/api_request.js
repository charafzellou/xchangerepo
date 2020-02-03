var request = require("request");

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
}

request(RapidAPIconfig, function (error, response, body) {
	if (error) throw new Error(error);
  const result = JSON.parse(body);
  RapidAPIrefine(result);
  console.log(result);
});

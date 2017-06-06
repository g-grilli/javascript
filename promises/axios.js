var axios = require('axios');
var api_url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

var p1 = axios.get(api_url);
var p2 = axios.get(api_url);

Promise.all([p1, p2])
	.then(function (responses) {
	    console.log(responses[0].data);
	    console.log(responses[1].data);
	  });

/*Given an array of urls:

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];
Use Promise.all and request-promise to retrieve the HTML files for all the web pages.
*/

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];


var axios = require('axios');
var p1 = axios.get(urls[0]);
var p2 = axios.get(urls[1]);
var p3 = axios.get(urls[2]);
var p4 = axios.get(urls[3]);
var p5 = axios.get(urls[4]);


Promise.all([p1, p2, p3, p4, p5])
	.then(function (htmlString) {
	    console.log(htmlString[0].data);
	    console.log(htmlString[1].data);
	    console.log(htmlString[2].data);
	    console.log(htmlString[3].data);
	    console.log(htmlString[4].data);

	  });


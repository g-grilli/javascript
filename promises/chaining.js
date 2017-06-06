/* Using request-promise and fs-promise modules build a 
function called saveWebPage which takes two parameters, 
url and filename. The function should chain the two 
promises together to download the URL and then save the 
file. */

var rp = require('request-promise');

rp('http://www.google.com')
    .then(function (htmlString) {
        // Process html... 
    })
    .catch(function (err) {
        // Crawling failed... 
    });
    
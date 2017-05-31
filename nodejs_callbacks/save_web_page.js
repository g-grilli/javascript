/* Given this code:

var request = require('request');
var fs = require('fs');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
Extract the saveWebPage function as a module in a separate 
file, and have the main script require it in order to use it.
*/


var request = require('request');
var fs = require('fs');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

exports.saveWebPage = saveWebPage;
























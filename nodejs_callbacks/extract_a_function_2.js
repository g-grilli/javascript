/* Given the following code:

var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
var requestOptions = {
  url: url,
  encoding: null
};
request(requestOptions, function(err, response, data) {
  if (err) {
    console.log(err.message);
    return;
  }

  fs.writeFile(filename, data, function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    gm(filename)
      .resize(240, 240)
      .write(thumbnailFilename, function(err) {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log('It worked');
      });
  });
}); 

In order to run the above code you need to install:

Homebrew
graphicsmagick - brew install graphicsmagick
the gm module - npm install gm
Extract a reusable function downloadAndCreateThumbnail(imageUrl, filename, thumbnailFilename, callback). You should be able to use the function like so:

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
}) */

var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';

function downloadAndCreateThumbnail(url, callback) {
	var requestOptions = {
	  url: url,
	  encoding: null
	};
	request(requestOptions, function(err, response, data) {
	  if (err) {
	    console.log(err.message);
	    return;
	  }

	  fs.writeFile(filename, data, function(err) {
	    if (err) {
	      console.log(err.message);
	      return;
	    }
	    gm(filename)
	      .resize(240, 240)
	      .write(thumbnailFilename, function(err) {
	        if (err) {
	          console.log(err.message);
	          return;
	        }
	        console.log('It worked');
	      });
	  });
	}); 
}

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
})












































var fs = require('fs');

fs.readFile('filename', function(error, buffer) {
	console.log('got file data:' + buffer);
}); /* change file name to the file name you want to read */

fs.readFile('filename', function(error, buffer) {
	console.log(buffer.toString());
});

fs.readFile('filename', function(error, buffer) {
	if (error) {
		console.error(error);
	} else {
		console.log('got file data:' + buffer);	
	}
}); /* explicit error handling */

/* { Error: ENOENT: no such file or directory, open 'filename'
    at Error (native) errno: -2, code: 'ENOENT', syscall: 'open', path: 'filename' } 
    *ERROR EXAMPLE* */

fs.readFile('filename', function(error, buffer) {
	if (error) {
		console.error(error);
		return;
	}  
	console.log('got file data:' + buffer);	
	}
}); /* error handling with early return */

 node fileread.js
/* used to call node from command line, not in nesh or node */

fs.writeFile('filename', 'Node.js is love.' function(error) {
	if (error) {
		console.log(error.message);
		return;
	}
	console.log('Saved file.');	
	}
});

var dns = reuire('dns');
var host = 'digitalcrafts.com';
dns.lookup(host, function (error, ip) {
	console.log('IP address is: ', ip);
});

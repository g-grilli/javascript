/* Write a program that prompts the user to enter a file name, and 
reads in the contents of the file, convert the text to all caps, 
and prints it out. 

Assuming the file file1.txt contains the text: Hello, I am file 1
.. Example output:
$ node cap_file.js
filename: file1.txt
HELLO, I AM FILE 1
*/

var fs = require('fs');
var filename = 'file1.txt';

fs.readfile(filename, function(error, buffer) {
	if (err) {
		console.log(error.message);
		return;
	}
	var contents = buffer.toString();
	var upper = contents.toUpperCase();
	fs.writeFile(filename, upper, function(error) {
		if (err) {
			console.log(error.message);
			return;
		}
		console.log('It worked');
	});
});


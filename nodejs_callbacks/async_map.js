/*  Make an array of file names like so:

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
]; 

Write a program using the async module to create all of 
these files in the directory, each file should contain the 
ext: "Hello, world!".*/

var files = [ '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'];
  
function createFiles() {
	for (var file of files) {
    	await fs.writeTextFile(file, 'Hello World!', null, 'a');
	}
}
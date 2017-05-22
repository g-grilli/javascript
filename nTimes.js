// You will write a function callNTimes that takes two arguments:
// times as a number, and fun as a function. It will call that 
// function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.function fun() {

hello = function fun() {
		return "Hello, World!"
}
function callNTimes(times) {
	function fun() {
		return "Hello, World!"
	}
	for (var i = 1; i<= times; i++) {
		console.log(fun());
	}
};






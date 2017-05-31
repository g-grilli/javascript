function (request, response, next) {
	response.send('hello world');
	next();
}

function add(x,y) {
 	return x + y;
 }

function add2 (x,y, callback) {
 	var ans = x + y;
 	callback(ans);
 }

 function add3 (x,y, callback) {
 	setTimeout(function () {
 	  var ans = x + y;
 	  callback(ans);
 	  });
 }
add3(2,3 function (ans) {
	console.log(ans);
});

numbers = [1,2,3,4];
function sum(numbers) {
	var result = numbers.reduce(function(a, b) {
		return a + b;}, 0);
	return result;
}

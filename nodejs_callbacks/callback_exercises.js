
/* Rewrite the following normal functions into CPS functions, on pencil and paper. */
/* 1.
function add(x, y) {
  var result = x + y;
  return result;
} */

function add(x, y, callback) {
  var result = x + y;
  callback(result);
}
add(2,3, function(result) {
	console.log('result is ' + result);
});

/* 2.

function subtract(x, y) {
  return x - y;
} */

function subtract(x, y, callback) {
  var result = x - y;
  callback(result);
}
subtract(7, 3, function(result) {
	console.log('result is ' + result);
});

/* 3.

function greeting(person) {
  return 'Hola, ' + person + '!';
} */

function greeting(person, callback) {
  var result = 'Hola, ' + person + '!';
  callback(result);
}
greeting('steve', function(result) {
	console.log(result);
});

/* 4.
function hello() {
  console.log('Hello, world!');
} */

function hello(callback) {
  var result = "Hello World";
  callback(result); 
}
hello(function(result) {
	console.log(result);
});


/* 5.
function product(numbers) {
  return numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
} */
function product(numbers, callback) {
  var result = numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
  callback(result);
}
product([2, 3], function(result) {
	console.log(result);
});

/* 6.  Rewrite the following code (both the function and the 
code calling the function) in continuation-passing style:

function square(num) {
  return num * num;
}

var squared = square(5);
*/

function square(num, callback) {
  var result = num * num;
  callback(result);
}

var squared = square(5, function(result) {
	console.log(result);
});

/*7 Same thing but with this:

var x = 4;
var y = 3;
var x2 = square(x);
var y2 = square(y);
var sum = x2 + y2;
*/

var x = 4;
var y = 3;
var sum = function (x, y) {
	square(x, function(x2) {
		console.log(x2);
		square(y, function(y2) {
			console.log(y2);
			var total = x2 + y2;
			console.log(total);
		});
	});
}

/* 8. Same but with this:

function square(num) {
  return num * num;
}

function squareRoot(num) {
  return Math.sqrt(num);
}

var x = 4;
var y = 3;
var x2 = square(x);
var y2 = square(y);
var sum = x2 + y2;
var answer = squareRoot(sum);
console.log('The answer is: ' + answer); */

function square(num, callback) {
  var result = num * num;
  callback(result);
}

function squareRoot(num, callback) {
  var result2 = Math.sqrt(num);
  callback(result2);
}


var answer = function (x, y) {
	square(x, function(x2) {
		console.log(x2);
		square(y, function(y2){
			console.log(y2);
			var total = x2 + y2;
			console.log(total);
				squareRoot(total, function(sum) {
					console.log(sum);
				});
		});
	});
}

/* 9. Add a 1000 millisecond delay to the CPS version of the 
square function you wrote for the last exercise, and a 
500 millisecond delay to the squareRoot function. Re-run 
the code and see that there's a delay before the answer is 
printed. */

function square(num, callback) {
  setTimeout(function() {
  	var result = num * num;
  	callback(result);
  }, 1000);
  
}

function squareRoot(num, callback) {
  setTimeout(function() {
  	var result2 = Math.sqrt(num);
  	callback(result2);
  }, 500);
}


var answer = function (x, y) {
	square(x, function(x2) {
		console.log(x2);
		square(y, function(y2){
			console.log(y2);
			var total = x2 + y2;
			console.log(total);
				squareRoot(total, function(sum) {
					console.log(sum);
				});
		});
	});
}





















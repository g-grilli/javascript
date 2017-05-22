// Write a function hello which given a name, says hello to 
// the name. 
function hello(name) {
	let output = "Hello " + name;
	console.log(output);
	return output;
}

hello('mustache')

// Modify your hello program such that if no name is given: 
// hello(), it will print "Hello, world!", otherwise it 
// behaves the same as previously.

function hello(name) {
	if (name !== undefined) {
		let output = "Hello " + name;
		console.log(output);
	}  else {
		console.log("Hello World");
	}
}

hello('mustache')
hello()

// Write a madlib function, which is given a name and a subject.
// It will return(not print) a new string: (name)'s favorite 
// subject in school is (subject).

function madlib(name, subject) {
	let output = name + "'s favorite subject in school is " + subject;
	console.log(output);
}

// Write a function tipAmount that is given the bill amount 
// and the level of service (one of good, fair and poor) and 
// returns the dollar amount for the tip. Based on:
// good 20%, fair 15%, bad 10%

function tipAmount(cost, service) {
	if (service === 'good') {
		var tip = cost * .2
		console.log("The tip for " + service + " service is " + tip + " dollars")
	} else if (service === 'fair') {
		var tip = cost * .15
		console.log("The tip for " + service + " service is " + tip + " dollars")
	} else {
		var tip = cost * .15
		console.log("The tip for " + service + " service is " + tip + " dollars")
	}

}

tipAmount(100, 'good')
tipAmount(40, 'fair')


// Write a function totalAmount that takes the same arguments 
// as tipAmount except it returns the total as the tip amount 
// plus the bill amount. This function may make use of tipAmount 
// as a sub-task.

function totalAmount(cost, service) {
	if (service === 'good') {
		var tip = cost * .2
		var total = tip + cost
		console.log("The tip for " + service + " service is " + tip + " dollars, the total bill would be " + total + " dollars")
	} else if (service === 'fair') {
		var tip = cost * .15
		var total = tip + cost
		console.log("The tip for " + service + " service is " + tip + " dollars, the total bill would be " + total + " dollars")
	} else {
		var tip = cost * .15
		var total = tip + cost
		console.log("The tip for " + service + " service is " + tip + " dollars, the total bill would be " + total + " dollars")
	}

}

// Write a function splitAmount that takes the bill amount and 
// the level of service, and the number of people to split the 
// bill between. It will return the final amount for each person.

function splitAmount(cost, service, people) {
	if (service === 'good') {
		var tip = cost * .2
		var total = tip + cost
		var split = total / people
		console.log("The tip for " + service + " service is " + tip + " dollars, the total bill would be " + total + " dollars, each person's share is " + split + " dollars")
	} else if (service === 'fair') {
		var tip = cost * .15
		var total = tip + cost
		var split = total / people
		console.log("The tip for " + service + " service is " + tip + " dollars, the total bill would be " + total + " dollars, each person's share is " + split + " dollars")
	} else {
		var tip = cost * .15
		var total = tip + cost
		var split = total / people
		console.log("The tip for " + service + " service is " + tip + " dollars, the total bill would be " + total + " dollars, each person's share is " + split + " dollars")
	}

}

// Write a function printNumbers which is given a start number 
// and an end number. It will print the numbers from one to the 
// ther, one per line:

function printNumbers(count, last) {
	while (count < last + 1) {
		console.log(count)
		count += 1;

	}
}


// Write a function printSquare which is given a size and 
// prints a square of that size using asterisks.
function printSquare(size) {
	count = 0;
	while (count < size) {
		stars = "*".repeat(size)
		console.log(stars)
		count += 1;

	}
}

// Write function printBox which is given a width and height 
// and prints a hollow box of those given dimensions.
function printBox(width, height) {
	count = 0;
	while (count < height + 1) {
		if (count === 0 || count === height) {
			stars = "*".repeat(width)
			console.log(stars)
			count += 1;
		} else {
			space = (width - 2)
			spaces =" ".repeat(space)
			stars = "*"
			console.log(stars + spaces + stars)
			count += 1;
		}
	}
}


// Write a function printBanner which is given some text and 
// prints a banner with a border surrounding the text. 
// The border has to stretch to the length of the text.
function printBanner(phrase) {
	var width = phrase.length
	var spaces = phrase.match(/ /g)
	var space = spaces.length
	var stars = "*".repeat(width + space + 1)
	console.log(stars)
	console.log("* " + phrase + " *")
	console.log(stars);
}

// Write a function factors which is given a number and 
// returns an array containing all its factors. What are 
// factors?

function factors(number) {
	for (var i = 1; i <= number; i++) {
		if (number % i === 0) {
			console.log(i);
		}
	}
}

// Write a function decipher which is given a string, 
// an offset, and returns the Caesar cipher of the string.
function decipher(phrase, offset){  
  var convert = []; 
  var currentPosition;
  var shiftedPosition;
  secret = phrase.toLowerCase();
  for (var i = 0; i<secret.length; i++) {
  	currentPosition = secret.charCodeAt(i);
  	shiftedPosition = secret.charCodeAt(i) + offset;
    if (shiftedPosition > 122) {
      convert.push(String.fromCharCode(96+currentPosition-122+offset));
    }
    else {
      convert.push(String.fromCharCode(shiftedPosition));
    }
  }
  console.log(convert.join(''));
}


decipher("lbh zhfg hayrnea jung lbh unir yrnearq.", 13);
decipher("jurervfzlpbssrr", 13); 

// Write a function cipher which is given a string, an offset, 
// and returns the original message.
function cipher(phrase, offset){  
  var convert = []; 
  var currentPosition;
  var shiftedPosition;
  secret = phrase.toLowerCase();
  for (var i = 0; i<secret.length; i++) {
  	currentPosition = secret.charCodeAt(i);
  	shiftedPosition = secret.charCodeAt(i) + offset;
    if (shiftedPosition > 122) {
      convert.push(String.fromCharCode(96+currentPosition-122+offset));
    }
    else {
      convert.push(String.fromCharCode(shiftedPosition));
    }
  }
  console.log(convert.join(''));
}


cipher("you must unlearn what you have learned.", 13);
cipher("whereismycoffee", 13);

// Write a function leetspeak which is given a string, 
// and returns the leetspeak equivalent of the string. 
// To convert text to its leetspeak version, make the 
// following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
function leetspeak(phrase) {
	var leet = phrase.toUpperCase()
	if (leet.includes('A')) {
		leet = leet.replace('A', 4)
	}
	else if (leet.includes('E')) {
		leet = leet.replace('E', 4)
	}
	else if (leet.includes('G')) {
		leet = leet.replace('G', 4)
	}
	else if (leet.includes('I')) {
		leet = leet.replace('I', 4)
	}
	else if (leet.includes('O')) {
		leet = leet.replace('O', 4)
	}
	else if (leet.includes('S')) {
		leet = leet.replace('S', 4)
	}
	else if (leet.includes('T')) {
		leet = leet.replace('T', 4)
	}
	console.log(leet)


// Write a function, which is given a string, return the result 
// f extending any long vowels to the length of 5.

function longLongVowels(word) {
	if (word.includes('oo')) {
		 word = word.replace('oo', 'ooooo')
		 console.log(word);
	}
	else if (word.includes('ee')) {
		 word = word.replace('ee', 'eeeee')
		 console.log(word);
	}
	else {
		console.log(word + " was not changed.");
	}
}

// Write a function sumNumbers which is given an 
// array of numbers and returns the sum of the numbers.
function sumNumbers(nums) {
	var value = nums.reduce(function(x, y) {
		return x + y;
	});
	console.log(value)
}
sumNumbers([1, 4, 8]) // 1

// Write a function positiveNumbers which is given an 
// array of numbers and returns a new array containing 
// only the positive numbers within the given array.
function positiveNumbers(nums) {
	newNums = []
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			newNums.push(nums[i]);
		}
	}
	console.log(newNums);
}

positiveNumbers([1,-3,5,-3,0])

// Write a function matrixAdd which is given two two-dimensional
// arrays, and returns a new two-dimensional array containing 
// their matrix sum.
function addMatrix (nums) {
	var value = nums.reduce(function(x, y) {
		return x + y;
	});
	console.log(value)
}
NOT FUNCTIONAL



// Write a function matrixMultiply which is given two 
// two-dimensional arrays - you can assume the matricies 
// are of size 2x2. It will return the result of matrix 
// multiplication between the two given matricies.
function matrixMultiply (matrix) {

}
NOT FUNCTIONAL










































// Given an array of array of numbers like:
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];


// Sort the array by the sum of each inner array. For the above 
// xample, the respective sums for each inner array is 8, 20, 
// and 9. Therefore, the solution should be:

arr.sort(function(x, y) {
	arr.reduce(function(x,y){
		return x+y;
	});
	if (x > y) { return 1; }
  	else if (x < y) { return -1; }
  	return 0;
});

// arr.sort() just returs arrays sorted by first number
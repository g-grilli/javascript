
    var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function increase () {
	var pickles = 0;
	var add = (function (){
		pickles += 1;
	})
}


function counter () {
  count = 0;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}


2. Allow the caller of counter to initialize the count to the first 
gument that's passed in.

3. Allow the counter to either increment 1 or decrement by 1 by 
calling the increment and decrement methods, respectively. 
Note: now the counter needs to return an object rather than a 
function.
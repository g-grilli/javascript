function () {
	console.log('hello');
}

/* Max Call /Stack Overflow */
function bug() {
	bug();
}
bug();

/* Reference error */

function bug() {
	bug2();
}
bug();


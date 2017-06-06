function fibonacci(num){
	var a = 1, b = 0, temp;

	while(num >= 0) {
		temp = a;
		a = a + b;
		b = temp;
		num--;
		console.log(b);
	}
	return b;
}

var f = 10;
console.log("fib(")
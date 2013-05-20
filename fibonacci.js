// Fibonacci
var fib = function (all) {
	var result = all[all.length - 1] + all[all.length - 2];

	if (result < 100) {
		all.push(result);
		fib(all);
	}

	return all;
};

console.log(fib([1,1]));

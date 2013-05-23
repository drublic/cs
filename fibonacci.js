// Fibonacci
// O(n^2)
var fib = function (all) {
	var result = all[all.length - 1] + all[all.length - 2];

	if (result < 100) {
		all.push(result);
		fib(all);
	}

	return all;
};

console.log(fib([1,1]));

// Better Fibonacci, less computing required. Better O(n)
// @index = number spot in array starting at 1
// @n = what number in the fibonacci sequence you want to go to
var fib2 = function( n, index ) {
	var results = [0, 1];

	if( n > 2 ) {
		for( var i = 2; i < n; i++ ){
			results[ i ] = results[ i - 2 ] + results[ i - 1 ];
		}
	}

	if( !!index && index <= n ) {
		return results[ index - 1 ];
	} else {
		return results;
	}
};

console.log( fib2( 10 ) ); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log( fib2( 10, 5 ) ); // 3

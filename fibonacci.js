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

// Better Fibonacci, less computing required. Better O(n)
var fib2 = function( n, index ) {
	var results = [0, 1];

	if( n < 3 ) {
		return results[ n - 1 ];
	}

	for( var i = 2; i < n; i++ ){
		results[ i ] = results[ i - 2 ] + results[ i - 1 ];
	}

	if( !!index ) {
		return results[ index -1 ];
	} else {
		return results;
	}
};

console.log( fib2( 10 ) );
console.log( fib2( 10, 5 ) );

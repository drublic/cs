// Find duplicates in an array

var list = [1,2,3,1,5,2,5,2,7];

var duplicates = function (list) {
	var i;
	var j;
	var singles = [];
	var done;

	for (i = 0; i < list.length; i++) {
		done = false;

		for (j = 0; j < singles.length; j++) {
			if (singles[j] === list[i]) {
				done = true;
			}
		}

		if (!done) {
			singles.push(list[i])
		}
	}

	return singles;
};

console.log(duplicates(list));;


var duplicates2 = function (list) {
	var singles = [];
	var i;

	if (list.length < 2) {
		return list;
	}

	list.sort(function (a, b) {
		return a > b ? 1 : -1;
	});

	if (singles.length < 1) {
		singles.push(list[0]);
	}

	for (i = 1; i < list.length; i++) {
		if (list[i] !== list[i - 1]) {
			singles.push(list[i])
		}
	}

	return singles;
};

console.log(duplicates2(list));

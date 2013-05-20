// Insertion sort

// Insertion sort iterates, consuming one input element each repetition, and
// growing a sorted output list. On a repetition, insertion sort removes one
// element from the input data, finds the location it belongs within the sorted
// list, and inserts it there. It repeats until no input elements remain.


var list = [34,5,35,653,23,53,74,2];

var insertion = function (list) {
	var item;
	var i = 0;
	var position;

	if (list.length <= 1) {
		return list;
	}

	for (; i < list.length; i++) {
		item = list[i];
		position = i;

		while (position > 0 && item < list[position - 1]) {
			list[position] = list[position - 1];
			position = position - 1;
		}

		list[position] = item;
	}

	return list;

};

console.log(insertion(list));

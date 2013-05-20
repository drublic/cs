// Selection sort

// The algorithm divides the input list into two parts: the sublist of items
// already sorted, which is built up from left to right at the front (left) of
// the list, and the sublist of items remaining to be sorted that occupy the
// rest of the list.
// The algorithm proceeds by finding the smallest (or largest, depending on
// sorting order) element in the unsorted sublist, exchanging it with the
// leftmost unsorted element (putting it in sorted order), and moving the
// sublist boundaries one element to the right.

var list = [12, 345, 634, 234, 436, 235, 374];

var selection = function (list) {
	var sortedIndex;
	var i;
	var minimal;
	var store;

	if (list.length <= 1) {
		return list;
	}

	for (sortedIndex = 0; sortedIndex < list.length; sortedIndex++) {
		minimal = sortedIndex;

		for (i = sortedIndex; i < list.length; i++) {
			if (list[i] < list[minimal]) {
				minimal = i;
			}
		}

		store = list[sortedIndex];
		list[sortedIndex] = list[minimal];
		list[minimal] = store;
	}

	return list;
};

console.log(selection(list));

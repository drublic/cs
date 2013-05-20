// Merge sort

var merge = function (left, right) {
	var result = [];
	var indexLeft = 0;
	var indexRight = 0;

	while (left.length > indexLeft && right.length > indexRight) {
		if (left[indexLeft] < right[indexRight]) {
			result.push(left[indexLeft++]);
		} else {
			result.push(right[indexRight++]);
		}
	}
	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

var mergeSort = function (list) {
	var left;
	var right;

	if (list.length <= 1) {
		return list;
	}

	left = list.slice(0, Math.floor(list.length / 2))
	right = list.slice(Math.floor(list.length / 2));

	return merge(mergeSort(left), mergeSort(right));
};

var list = [12,312,352,34,234,54,2,5];
console.log(mergeSort(list));
// console.log(mergeSort([2,5]));

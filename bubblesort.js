// Bubble sort

var list = [12,1,52,56,562,7,23];

var bubble = function (list) {
	var i;
	var store;
	var done;

	for (done = 0; done <= list.length;) {
		for (i = 0; i < list.length; i++) {
			if (list[i] > list[i + 1]) {
				store = list[i + 1];

				list[i + 1] = list[i];
				list[i] = store;

				done++;
			}
		}
	}

	return list;
};

console.log(bubble(list));

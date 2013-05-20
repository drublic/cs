// The Towers of Hanoi

// The Tower of Hanoi consists of three rods, and a number of disks of different
// sizes which can slide onto any rod. The puzzle starts with the disks in a
// neat stack in ascending order of size on one rod, the smallest at the top,
// thus making a conical shape.
// The objective of the puzzle is to move the entire stack to another rod,
// obeying the following rules:
// - Only one disk may be moved at a time.
// - Each move consists of taking the upper disk from one of the rods and
//   sliding it onto another rod, on top of the other disks that may already be
//   present on that rod.
// - No disk may be placed on top of a smaller disk.

var start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var hanoi = function (t1, t2, t3) {
	var i;
	var target;

	if (t1.length === 0) {
		console.error('T1 has no items.');
	}

	while (t3.length > 0) {
		t2.push(t3[0]);
		t3.shift();
	}

	if (t2.length === 0) {
		t2.push(t1[0]);
		t1.shift();
	} else if (t3.length === 0) {
		t3.push(t1[0]);
		t1.shift();
	}

	while (t2.length > 0) {
		t3.push(t2[0]);
		t2.shift();
	}

	if (t1.length > 0) {
		hanoi(t1, t2, t3);
	}

	return [t1, t2, t3];

};

console.log(hanoi(start, [], []));

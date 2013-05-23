// Quicksort
// O(n log n)

var list = [9,5,7,3,10,11];

var quicksort = function (list) {
    var pivotIndex = Math.ceil(list.length /2);
    var pivot = list[pivotIndex];
    var left = [];
    var right = [];

    if (list.length <= 1) {
        return list;
    }

    list.splice(pivotIndex, 1);

    while (list.length > 0) {
        if (list[0] <= pivot) {
            left.push(list[0]);
        } else if (list[0] > pivot) {
            right.push(list[0])
        }

        list.shift();
    }

    left = quicksort(left);
    right = quicksort(right);

    return left.concat([pivot]).concat(right);
};

console.log(quicksort(list));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// .map
console.log(arr.map(function (x) { return (x >= 2); }));
// .filter
console.log(arr.filter(function (x) { return (x >= 2); }));
// forEach
console.log(arr.forEach(function (x) { (x * 2); }));
// reduce
console.log(arr.reduce(function (ac, cu) { return ac + cu; }));

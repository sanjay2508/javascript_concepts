let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .map
console.log(arr.map((x) => (x >= 2)))

// .filter
console.log(arr.filter((x) => (x * 2 === 2)))

// forEach
console.log(arr.forEach((x) => { (x * 2) }))

// reduce
console.log(arr.reduce((ac, cu) => ac + cu))
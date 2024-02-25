let n = 3;
let arrays = [
  [67, 88, 99, 81, 83],
  [66, 76, 82, 91, 69],
  [69, 75, 79, 82, 43],
];

let avgArray = [];
let index = 0;
let lastSum = 0;

for (i = 0; i < 5; i++) {
  let sum = 0;
  for (j = 0; j < 3; j++) {
    sum = sum + arrays[j][i];
  }
  if (sum < lastSum) {
    index = i;
  }
  lastSum = sum;
  avgArray.push(sum / 3);
}

for (j = 0; j < 3; j++) {
  for (i = 0; i < 5; i++) {

  }
}

console.log(avgArray);
console.log(index);
let result = 14;
let arr = [2, 3, 7, 4, 7, 5]


function generateCombinations(arr) {
    const result = [[]];

    for (const item of arr) {
        const currentCombinations = [];

        for (const combination of result) {
            currentCombinations.push([...combination, item]);
        }

        result.push(...currentCombinations);
    }

    return result;
}

const inputArray = [2, 3, 7, 4, 7, 5];
const combinations = generateCombinations(inputArray);
let outputArr = [];

for (i = 0; i < combinations.length; i++) {
    let sum = 0;
    for (j = 0; j < combinations[i].length; j++) {
        sum = sum + combinations[i][j];
    }
    if (sum === result) {
        outputArr.push(combinations[i]);
    }
}

console.log(outputArr);

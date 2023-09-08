function twoSum(arr, target) {
    let sum = [];
    let dict = {};
    arr.forEach((num) => {
        let diff = target - num;
        if (dict[diff] !== undefined) {
            sum.push([num, diff]);
        }
        dict[num.toString()] = num;
    })
    console.log(sum);
}

twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 12)
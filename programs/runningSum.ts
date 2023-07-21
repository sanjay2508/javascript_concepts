function runningSum(nums: number[]): number[] {
    let t: number[] = [];
    // return nums.map((x) => {
    //     sum = x + sum
    //     return sum
    // })
    // nums.forEach((value, i) => {
    //     if (i == 0)
    //         t.push(value)
    //     else
    //         t.push((t[i - 1] + value))
    // });
    // return t;
    t[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        t.push((t[i - 1] + nums[i]))
    }
    return t;
};


console.log(runningSum([1, 2, 3, 4]))
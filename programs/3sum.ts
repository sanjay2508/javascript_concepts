function threeSum(nums: number[]): number[][] {
    let output: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let arr: number[] = [];
                if (nums[i] + nums[j] + nums[k] == 0) {
                    arr.push(nums[i])
                    arr.push(nums[j])
                    arr.push(nums[k])
                    // output.push(arr.sort());
                    if (!output.some((subArray) => JSON.stringify(subArray) === JSON.stringify(arr.sort()))) {
                        output.push(arr.sort());
                    }
                }
            }
        }
    }
    return output;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
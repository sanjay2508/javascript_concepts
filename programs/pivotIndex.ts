function pivotIndex(nums: number[]): number {
    let leftSum: number[] = [];
    let rightSum: number[] = [];
    let numsLenght = nums.length;
    leftSum.push(nums[0])
    rightSum.push(nums[numsLenght - 1])
    for (let i = 1; i < numsLenght; i++) {
        leftSum.push(nums[i] + leftSum[i - 1])
        rightSum.splice(0, 0, nums[numsLenght - (i + 1)] + rightSum[0])
        console.log(leftSum)
        console.log(rightSum)
    }
    if (rightSum[1] === 0) {
        return 0
    }
    if (leftSum[numsLenght] === 0) {
        return numsLenght
    }
    for (let i = 1; i < numsLenght; i++) {
        if (leftSum[i - 1] === rightSum[i + 1]) {
            return i;
        }
    }
    return -1
};

console.log(pivotIndex([2, 1, -1]))
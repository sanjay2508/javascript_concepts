function removeDuplicates(nums: any[]) {
    let k = 0;
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = nums[i];
            k++;
        } else {
            nums.splice(i, 1);
            i = i - 1;
        }
    }
    return k;
};
// console.log(removeDuplicates([1, 1, 2]));

function removeElement(nums: number[], val: number): number {
    const set = new Set(nums);

    let i = 0;
    set.forEach(v => {
        nums[i] = v;
        i++;
    })

    return set.size
    // nums.forEach((x, index) => {
    //     if (x === val) {
    //         nums.splice(index, 1);
    //     }
    // })
    // return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
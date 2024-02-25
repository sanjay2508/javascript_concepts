function removeDuplicates(nums) {
    var k = 0;
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = nums[i];
            k++;
        }
        else {
            nums.splice(i, 1);
            i = i - 1;
        }
    }
    return k;
}
;
// console.log(removeDuplicates([1, 1, 2]));
function removeElement(nums) {
    var set = new Set(nums);
    var i = 0;
    set.forEach(function (v) {
        nums[i] = v;
        i++;
    });
    return set.size;
    // nums.forEach((x, index) => {
    //     if (x === val) {
    //         nums.splice(index, 1);
    //     }
    // })
    // return nums.length;
}
;
console.log(removeDuplicates([3, 2, 2, 3]));

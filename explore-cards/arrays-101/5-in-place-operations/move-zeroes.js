/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    noOfZeroes = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            nums.splice(i, 1);
            noOfZeroes += 1;
            i -= 1;
        }
    }
    while(noOfZeroes != 0) {
        nums.push(0);
        noOfZeroes -= 1;
    }
};
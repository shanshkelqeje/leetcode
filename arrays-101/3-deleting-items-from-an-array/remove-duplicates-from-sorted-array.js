/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    k = 0; // The number of unique elements in nums
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i -= 1;
        }
        else {
            k += 1;
        }
    }
    return k;
};
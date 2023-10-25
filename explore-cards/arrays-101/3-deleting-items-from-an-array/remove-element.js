/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    k = 0; // The no. of elements in nums which are not equal to val
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == val) {
            nums.splice(i, 1);
            i -= 1;
        }
        else {
            k += 1;
        }
    }
    return k;
};
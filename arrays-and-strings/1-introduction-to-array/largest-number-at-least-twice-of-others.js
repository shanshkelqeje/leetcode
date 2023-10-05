/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    largestNo = 0;
    largestNoIndex = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] > largestNo) {
            largestNo = nums[i];
            largestNoIndex = i;
        }
    }
    nums.splice(largestNoIndex, 1);
    for(i = 0; i < nums.length; i++) {
        if(largestNo < 2*nums[i]) {
            return -1;
        }
    }
    return largestNoIndex;
};
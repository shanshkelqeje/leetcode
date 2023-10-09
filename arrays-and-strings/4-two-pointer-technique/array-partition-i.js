/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    totalSum = 0;
    // Sort array into non-decreasing order
    nums.sort(function(a, b){return a - b});
    // Two-pointer technique to itereate through array
    // Reason: Smallest num should be paired with largest num to return maximised result
    i = 0;
    for(var j = 0; j < nums.length; j++) {
        totalSum += Math.min(nums[j], nums[j+1]);
        j += 1;
    }
    return totalSum;
};
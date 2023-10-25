/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    totalSum = 0;
    // Sort array into non-decreasing order
    nums.sort(function(a, b){return a - b});
    // Iterate through array
    // Reason: largest num should be paired with largest num and smallest num should be paired with smallest num to return maximised result
    i = 0;
    for(var j = 0; j < nums.length; j++) {
        totalSum += Math.min(nums[j], nums[j+1]);
        j += 1;
    }
    return totalSum;
};
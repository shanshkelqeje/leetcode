/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    runningSumArray = [];
    currentSum = 0;
    for(var i = 0; i < nums.length; i++) {
        currentSum = currentSum + nums[i];
        runningSumArray.push(currentSum);
    }
    return runningSumArray;
};
// @lc code=end


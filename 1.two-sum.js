/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i = 0; i < nums.length - 1; i++) {
        for(j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target && i != j) {
                return [i, j];
            }
        }
    }
};
// @lc code=end


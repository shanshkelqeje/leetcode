/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) { // O(n) runtime complexity
    indexPosition = [];
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == target && nums[i-1] != target) {
            indexPosition.push(i); // Starting position
        }
        if(nums[i] == target && nums[i+1] != target) {
            indexPosition.push(i); // Ending position
            return indexPosition;
        }
    }
    return [-1, -1];
};
// @lc code=end
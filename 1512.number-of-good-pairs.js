/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    goodPairs = 0;
    for(var i = 0; i < nums.length; i++) {
        for(var j = 0; j < nums.length; j++) {
            if(nums[i] == nums[j] && i < j) {
                goodPairs += 1;
            }
        }
    }
    return goodPairs;
};
// @lc code=end


/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    maxAppearances = Math.floor(nums.length / 2);
    totalAppearances = 0;
    nums.sort(function(a, b){return a - b});
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1]) {
            totalAppearances += 1;
            if(totalAppearances == maxAppearances) {
                return nums[i];
            }
        }
        else {
            totalAppearances = 0;
        }
    }
};
// @lc code=end
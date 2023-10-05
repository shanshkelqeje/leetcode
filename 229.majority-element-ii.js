/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    maxAppearances = Math.floor(nums.length / 3);
    totalAppearances = 0;
    majorityNums = [];
    // Edge case (when ⌊n/3⌋ = 0)
    if(maxAppearances == 0) {
        if(nums.length == 2) {
            if(nums[0] == nums[1]) {
                nums.pop();
                return nums;
            }
            else {
                return nums;
            }
        }
        else {
            return nums;
        }
    }
    // General cases
    nums.sort(function(a, b){return a - b});
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1]) {
            totalAppearances += 1;
            if(totalAppearances == maxAppearances) {
                majorityNums.push(nums[i])
            }
        }
        else {
            totalAppearances = 0;
        }
    }
    return majorityNums;
};
// @lc code=end
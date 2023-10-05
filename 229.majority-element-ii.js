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
    noOfAppearance = Math.floor(nums.length / 3);
    holdingNums = [];
    if(noOfAppearance == 0) {
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
    while(noOfAppearance != 0) {
        for(var i = 0; i < nums.length; i++) {
            for(var j = nums.length - 1; j > i; j--) {
                if(nums[i] == nums[j] && noOfAppearance == 1) {
                    holdingNums.push(nums[j]);
                }
                else {
                    nums.splice(j, 1);
                }
            }
        }
        noOfAppearance -= 1;
    }
    return holdingNums;
};
// @lc code=end
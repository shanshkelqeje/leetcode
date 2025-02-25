/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!numsMap.get(nums[i])) numsMap.set(nums[i], true);
        else return true;
    }
    return false;
};
// @lc code=end

/*
Hash Map
Time Complexity: O(n)
Space Complexity: O(n)
*/

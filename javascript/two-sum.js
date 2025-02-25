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
var twoSum = function (nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (numsMap.has(difference)) {
            return [numsMap.get(difference), i];
        }
        numsMap.set(nums[i], i);
    }
};
// @lc code=end

/*
Hash Map (One Pass)
Time Complexity: O(n)
Space Complexity: O(n)
*/

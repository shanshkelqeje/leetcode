/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    ans = [];

    for (let i = 0; i < nums.length * 2; i++) {
        if (i < nums.length) ans[i] = nums[i];
        else ans.push(nums[i - nums.length]);
    }

    return ans;
};
// @lc code=end

/*
Iteration (One Pass)
Time Complexity: O(n)
Space Complexity: O(n)
*/

/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs[0].length; i++) {
        for (let string of strs) {
            if (string[i] != strs[0][i] || i == string.length)
                return string.slice(0, i);
        }
    }
    return strs[0];
};
// @lc code=end

/*
Vertical Scanning
Time Complexity: O(n * m)
Space Complexity: O(1)
*/

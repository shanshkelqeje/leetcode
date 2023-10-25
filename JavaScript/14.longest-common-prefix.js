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
var longestCommonPrefix = function(strs) {
    commonPrefix = '';
    previousPrefix = '';
    for(var i = 0; i < strs[0].length; i++) {
        commonPrefix = strs[0].slice(0, i + 1);
        for(var j = 0; j < strs.length; j++) {
            if(strs[j].startsWith(commonPrefix)) {
                continue;
            }
            else {
                return previousPrefix;
            }
        }
        previousPrefix = commonPrefix;
    }
    return previousPrefix;
};
// @lc code=end
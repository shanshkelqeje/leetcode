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
    prefix = '';
    letter = '';
    x = 0;
    j = 0;
    for(var i = 0; i < strs.length; i++) {
        letter = strs[0][j];
        if(strs[i][j] == letter) {
            x += 1;
        }
        else {
            return prefix;
        }
        if(x == strs.length) {
            prefix += letter;
            x = 0;
            i = -1;
            j += 1;
            letter = strs[i+1][j];
        }
    }
    return prefix;
};
strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs));
// @lc code=end


/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    j = x.length - 1;
    for(i = 0; i < x.length; i++) {
        if(x[i] != x[j]) {
            return false;
        }
        else {
            j -= 1;
        }
    }
    return true;
};
// @lc code=end
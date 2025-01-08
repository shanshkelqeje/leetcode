/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    sArray = s.split("").sort();
    tArray = t.split("").sort();
    if (sArray.length != tArray.length) return false;
    else {
        for (let i = 0; i < sArray.length; i++) {
            if (sArray[i] != tArray[i]) return false;
        }
    }
    return true;
};
// @lc code=end

/*
Brute Force
Time Complexity: O(nlogn + mlogm)
Space Complexity: O(n + m)
*/

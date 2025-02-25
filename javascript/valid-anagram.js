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
    if (s.length != t.length) return false;
    sMap = new Map();
    tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 1) + 1);
        tMap.set(t[i], (tMap.get(t[i]) || 1) + 1);
    }
    for (const [char, count] of sMap) {
        if (sMap.get(char) != tMap.get(char)) return false;
    }
    return true;
};
// @lc code=end

/*
Hash Maps
Time Complexity: O(n + m)
Space Complexity: O(1) - 26 alphabets
*/

/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    stringArray = s.split(' ');
    reversedString = '';
    for(var i = 0; i < stringArray.length; i++) {
        for(var j = stringArray[i].length - 1; j > -1; j--) {
            reversedString += stringArray[i][j];
        }
        if(i != stringArray.length - 1) {
            reversedString += ' ';
        }
    }
    return reversedString;
};
// @lc code=end


/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romanSymbols = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    sumOfInt = 0;
    for(i = 0; i < s.length; i++) {
        if(s[i] == 'I') {
            if(s[i + 1] == 'V') {
                sumOfInt += 4;
                i += 1;
            }
            else if(s[i + 1] == 'X') {
                sumOfInt += 9;
                i += 1;
            }
            else {
                sumOfInt += romanSymbols[s[i]];
            }
        }
        else if(s[i] == 'X') {
            if(s[i + 1] == 'L') {
                sumOfInt += 40;
                i += 1;
            }
            else if(s[i + 1] == 'C') {
                sumOfInt += 90;
                i += 1;
            }
            else {
                sumOfInt += romanSymbols[s[i]];
            }
        }
        else if(s[i] == 'C') {
            if(s[i + 1] == 'D') {
                sumOfInt += 400;
                i += 1;
            }
            else if(s[i + 1] == 'M') {
                sumOfInt += 900;
                i += 1;
            }
            else {
                sumOfInt += romanSymbols[s[i]];
            }
        }
        else {
            sumOfInt += romanSymbols[s[i]];
        }
    }
    return sumOfInt;
};

/*
    Question Mark Operator
    https://www.google.com/search?client=firefox-b-d&q=javascript+question+mark
*/

// @lc code=end


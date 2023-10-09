/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    tempChar = '';
    i = 0;
    for(var j = s.length - 1; j > i; j--) {
        tempChar = s[i];
        s[i] = s[j];
        s[j] = tempChar;
        i += 1;
    }
};
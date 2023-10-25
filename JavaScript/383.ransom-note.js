/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');
    for(var i = 0; i < ransomNote.length; i++) {
        for(var j = 0; j < magazine.length; j++) {
            if(ransomNote[i] == magazine[j]) {
                ransomNote.splice(i, 1);
                magazine.splice(j, 1);
                i -= 1;
                j -= 1;
            }
        }
    }
    if(ransomNote == '') {
        return true;
    }
    else {
        return false;
    }
};
// @lc code=end
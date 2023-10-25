/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(var i = 0; i < haystack.length; i++) {
        for(var j = haystack.length - 1; j >= i; j--){
            if(haystack.slice(i, j + 1) == needle) {
                return i;
            }
        }
    }
    return -1;
};
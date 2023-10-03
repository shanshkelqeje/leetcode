/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(i != j && arr[i] == 2*arr[j]) {
                return true;
            }
        }
    }
    return false;
};
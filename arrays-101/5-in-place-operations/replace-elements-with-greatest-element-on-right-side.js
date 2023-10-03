/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    currentValue = 0;
    highestValue = 0;
    for(var i = arr.length - 1; i >= 0; i--) {
        currentValue = highestValue;
        if(arr[i] > highestValue) {
            highestValue = arr[i];
        }
        arr[i] = currentValue;
        if(i == arr.length - 1) { // Edge case for last element
            arr[i] = -1;
        }
    }
    return arr;
};
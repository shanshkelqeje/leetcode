/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) { // Mountain array must have array length >= 3
        return false;
    }
    ascendingMountain = 1;
    descendingMountain = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1] && ascendingMountain) {
            descendingMountain = 1;
            ascendingMountain = 0;
        }
        else if(arr[i] == arr[i+1]) {
            return false;
        }
        if(i == 0 && descendingMountain) {
            return false;
        }
        if(arr[i] <= arr[i+1] && descendingMountain) {
            return false;
        }
    }
    if(descendingMountain == 0) { // Array is strictly increasing, not a mountain array
        return false;
    }
    else {
        return true;
    }
};
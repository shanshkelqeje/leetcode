/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    noOfNumbersWithEvenDigits = 0;
    for(var i = 0; i < nums.length; i++ ) {
        noOfDigits = 0;
        for(var j = 0; j < nums[i].toString().length; j++) {
            noOfDigits += 1;
        }
        if(noOfDigits % 2 == 0) {
            noOfNumbersWithEvenDigits += 1;
        }
    }
    return noOfNumbersWithEvenDigits;
};
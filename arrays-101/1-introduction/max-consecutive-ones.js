/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    biggestSize = 0;
    currentSize = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == 1 && nums[i-1] != 1) {
            currentSize += 1;
        }
        else if(nums[i] == 1 && nums[i-1] == 1) {
            currentSize += 1;
        }
        else if(nums[i] == 1 && nums[i+1] != 1) {
            currentSize += 1;
        }
        if(nums[i] != 1 || nums[i+1] != 1) {
            if(currentSize > biggestSize) {
                biggestSize = currentSize;
            }
            else {
                currentSize = 0;
            }
        }
    }
    return biggestSize;
};
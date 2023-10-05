/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    leftSideSum = 0;
    rightSideSum = 0;
    for(var middleIndex = 0; middleIndex < nums.length; middleIndex++) {
        if(middleIndex > 0) {
            leftSideSum += nums[middleIndex -1];
        }
        for(var i = middleIndex + 1; i < nums.length; i++) {
            rightSideSum += nums[i];
        }
        if(leftSideSum == rightSideSum) {
            return middleIndex;
        }
        else {
            rightSideSum = 0;
        }
    }
    return -1;
};
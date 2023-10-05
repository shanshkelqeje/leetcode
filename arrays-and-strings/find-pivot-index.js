/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    leftSum = 0;
    rightSum = 0;
    index = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != NaN) {
            leftSum += nums[i];
        }
        console.log('leftSum is ' + leftSum);
        for(var j = nums.length; j > i + 1; j--) {
            rightSum += nums[j];
            console.log('rightSum is ' + rightSum);
            if(leftSum == rightSum) {
                return index = i + 1;
            }
        }
        rightSum = 0;
    }
    return -1;
};

nums = [2, 1, -1];
console.log(pivotIndex(nums));
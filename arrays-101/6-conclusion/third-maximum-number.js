/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    maxDistintNos = [];
    nums.sort(function(a, b){return b - a})
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i+1]) {
            maxDistintNos.push(nums[i]);
            if(maxDistintNos.length == 3) {
                break;
            }
        }
    }
    return maxDistintNos[2];
};

nums = [3, 2, 1];
console.log(thirdMax(nums));
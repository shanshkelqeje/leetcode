/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    oddNumbers = [];
    sortedArray = [];
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] % 2 != 0) {
            oddNumbers.push(nums[i]);
            nums.splice(i, 1);
            i -= 1;
        }
    }
    sortedArray = nums.concat(oddNumbers);
    return sortedArray;
};
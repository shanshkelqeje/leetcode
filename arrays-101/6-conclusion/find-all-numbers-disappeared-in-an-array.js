/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    runningNums = [];
    for(var i = 0; i < nums.length; i++) {
        runningNums.push(i + 1);
    }
    for(num of nums) {
        for(var i = 0; i < runningNums.length; i++) {
            if(runningNums[i] == num) {
                runningNums.splice(i, 1);
                i -= 1;
            }
        }
    }
    return runningNums;
};
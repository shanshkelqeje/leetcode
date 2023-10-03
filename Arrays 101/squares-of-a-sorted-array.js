/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    squaredArray = [];
    for(var num of nums) {
        squaredArray.push(num *= num);
    }
    squaredArray.sort(function(a, b){return a - b});
    return squaredArray;
};
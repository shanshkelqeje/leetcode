/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    left = 0;
    right = numbers.length - 1;
    while(numbers[left] + numbers[right] != target) {
        if(numbers[left] + numbers[right] > target) {
            right--;
        }
        else {
            left++;
        }
    }

    return [left + 1, right + 1];
};

numbers = [2,7,11,15];
target = 9;

console.log(twoSum(numbers, target));
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    answerArray = [];
    digits = digits.join('');
    digits = BigInt(digits)
    digits += 1n;
    for(var digit of digits.toString()) {
        answerArray.push(digit);
    }
    return answerArray;
};
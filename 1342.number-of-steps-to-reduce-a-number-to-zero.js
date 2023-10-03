/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    stepsTaken = 0;
    while(num != 0) {
        console.log(num);
        if(num % 2 == 0) {
            num /= 2;
            stepsTaken += 1;
        }
        else {
            num -= 1;
            stepsTaken += 1;
        }
    }
    return stepsTaken;
};
// @lc code=end


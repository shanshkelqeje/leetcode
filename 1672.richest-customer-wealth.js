/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    highestWealth = 0;
    for(var i = 0; i < accounts.length; i++) {
        customerWealth = 0;
        for(var j = 0; j < accounts[i].length; j++) {
            customerWealth = customerWealth + accounts[i][j];
        }
        if(customerWealth > highestWealth) {
            highestWealth = customerWealth;
        }
    }
    return highestWealth;
};
// @lc code=end


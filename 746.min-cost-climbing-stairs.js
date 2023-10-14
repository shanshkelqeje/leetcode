/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    totalCost = 0;
    for(var i = 0; i < cost.length; i++) {
        totalCost += cost[i];
    }
    return totalCost;
};
// @lc code=end

cost = [10,15,20];
console.log(minCostClimbingStairs(cost));
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
    if(cost[0] > cost[1]) {
        for(var i = 1; i < cost.length; i++) {
            // console.log(i);
            totalCost += cost[i];
            if(cost[i+2] < cost[i+1]) {
                i++;
            }
        }
    }
    else {
        for(var i = 0; i < cost.length; i++) {
            console.log(i);
            totalCost += cost[i];
            console.log(totalCost);
            if(cost[i+2] < cost[i+1]) {
                i++;
            }
        }
    }
    return totalCost;
};
// @lc code=end

cost = [10,15,20];
console.log(minCostClimbingStairs(cost));
/*
 * @lc app=leetcode id=2038 lang=javascript
 *
 * [2038] Remove Colored Pieces if Both Neighbors are the Same Color
 */

// @lc code=start
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    aliceTurn = 1;
    bobTurn = 0;
    while(aliceTurn == 1) {
        for(var i = 0; i < colors.length; i++) {
            if(colors[i-1] == colors[i] == colors[i+1] == 'A') {
                console.log('a');
                aliceTurn = 0;
                bobTurn = 1;
            }
        }
    }
    while(bobTurn == 1) {
        for(var i = 0; i < colors.length; i++) {
            if(colors[i-1] == colors[i] == colors[i+1] == 'B') {
                bobTurn = 0;
                aliceTurn = 1;
                console.log('b');
            }
        }
    }
    if(aliceTurn == 1) {
        return false;
    }
    else {
        return true;
    }
};
colors = 'AAABABB';
console.log(winnerOfGame(colors));
// @lc code=end


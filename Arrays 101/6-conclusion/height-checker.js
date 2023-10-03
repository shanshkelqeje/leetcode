/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    expected = [];
    wrongLocation = 0;
    // Sort students in to non-decreasing order
    expected = heights.slice();
    expected.sort(function(a, b){return a - b});
    // Compare expected array vs heights array
    for(var i = 0; i < heights.length; i++) {
        if(heights[i] != expected[i]) {
            wrongLocation += 1;
        }
    }
    return wrongLocation;
};
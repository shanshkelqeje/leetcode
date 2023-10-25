/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    orderedNos = [];
    for(var m = 0; m < mat.length; m++) {
        // console.log('m is ' + m);
        for(var n = 0; n < mat[m].length; n++) {
            // console.log('n is ' + n);
            orderedNos.push(mat[m][n]);
            break;
        }
    }
    return orderedNos;
};

mat = [[1,2,3],[4,5,6],[7,8,9]];
console.log(findDiagonalOrder(mat));
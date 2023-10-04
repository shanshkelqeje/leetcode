/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    distinctNos = [];
    maximumNo = 0;
    for(var i = 0; i < nums.length; i++) {
        if(distinctNos.length < 3) {
            distinctNos.push(nums[i]);
        }
        for(var j = 0; j < distinctNos.length; j++) {
            if(distinctNos[j] == distinctNos[j+1]) {
                distinctNos.splice(j+1, 1);
            }
        }
    }
    console.log(distinctNos);
    if(distinctNos.length == 3) {
        return distinctNos[2];
    }
    else {
        for(num of distinctNos) {
            if(maximumNo < num) {
                maximumNo = num;
            }
        }
        return maximumNo;
    }
};

nums = [1,2,2,5,3,5];
console.log(thirdMax(nums));
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(m != nums1.length) {
        nums1.pop();
    }
    while(n != 0) {
        for(var num of nums2) {
            nums1.push(num);
            n -= 1;
        }
    }
    nums1.sort(function(a, b){return a - b});
};
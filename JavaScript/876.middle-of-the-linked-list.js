/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    totalNodes = 0;
    middleNodePos = 0;
    x = head;
    y= head;
    while(x.next != null) {
        x = x.next;
        totalNodes += 1;
    }
    middleNodePos = Math.ceil(totalNodes / 2);
    while(middleNodePos != 0) {
        y = y.next;
        middleNodePos -= 1;
    }
    return y;
};
// @lc code=end


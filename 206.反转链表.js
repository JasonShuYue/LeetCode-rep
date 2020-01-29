/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1. 三个指针
var reverseList = function(head) {
    if(head == null || head.next == null) return head;

    let p = null;
    let q = head;
    let l;

    while(q !== null) {
        if(q.next !== null) {
            l = q.next;
            q.next = p;
            p = q;
            q = l;
        } else {
            q.next = p;
            return q;
        }
    }
};
// @lc code=end


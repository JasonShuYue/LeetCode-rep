/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 建立「哨兵」节点，使用双指针p和q分别指向l1和l2
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    
    let p = l1;
    let q = l2;
    let dumpy = new ListNode(0);
    let pre = dumpy;

    while(p !== null && q !== null) {
        if(p.val < q.val) {
            pre.next = p;
            p = p.next;
        } else {
            pre.next = q;
            q = q.next;
        }
        pre = pre.next;
    }

    if(p == null) pre.next = q;
    if(q == null) pre.next = p;

    return dumpy.next;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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

//  小技巧：slow和fast指针都从head开始，第一次碰面后，将fast重置到head
// 然后slow和fast指针分别步长1前进，再次相遇时就是「环头部」
var detectCycle = function(head) {
    if(head === null || head.next === null) return null;

    let slow = head;
    let fast = head;
    let pos = -1;

    slow = slow.next;

    fast = fast.next.next;

    while(fast !== null && fast.next !== null) {
        if(slow === fast) {
            fast = head;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast === head) {
        while(slow !== fast) {
            pos++;
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    } 

    return null;
};
// @lc code=end


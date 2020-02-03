/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

//  快慢指针
var hasCycle = function(head) {
    if(head == null || head.next == 0) return false;

    let slow = head;
    let fast = head.next;

    while(fast !== null && fast.next !== null) {
        if(fast === slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;


};
// @lc code=end


/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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


var swapPairs = function(head) {
    if( head == null || head.next == null) return head;

    // 建立一个「头部哨兵节点」
    let dumpy = new ListNode(0);
    let preNode = dumpy;

    let firstNode;
    let secondNode;

    preNode.next = head;

    while(preNode.next !== null && preNode.next.next !== null) {
        firstNode = preNode.next;
        secondNode = preNode.next.next;

        // Swap
        preNode.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        preNode = firstNode;
    }

    
    return dumpy.next;
};



// @lc code=end


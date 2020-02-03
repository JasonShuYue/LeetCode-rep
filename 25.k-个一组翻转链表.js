/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */

 // 稍微改造下「翻转链表」的算法，返回翻转后的头结点「newHead」和尾节点「newTail」
var reverseList = function(head) {
    if(head == null || head.next == null) return {newHead:head, newTail: null};

    let pre = null;
    let cur = head;
    let next;

    while(cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return {
        newHead: pre,
        newTail: head
    }
};

var reverseKGroup = function(head, k) {
    // 特殊情况考虑
    if(head == null || head.next == null || k == 1) return head;

    // 建立「哨兵节点」
    let dumpy = new ListNode(0);
    let pre = dumpy;
    let count = 1;
    let tail = head;

   
    // 核心：每k个节点一组，丢入「reverseList」，然后合并。
    // 其中有个技巧是：将第k个节点的next设为null，也就是「截断」
    while(tail !== null && tail.next !== null) {
        tail = tail.next;
        count++;
        if(count % k == 0) {
            count = 1;
            let next = tail.next;


            tail.next = null;

            let {newHead, newTail} = reverseList(head);

            pre.next = newHead;
            pre = newTail;

            head = next;
            tail = next;
        }
    }

    // 如果最后一节个数没到k个，直接连接起来
    if(head !== null) {
        pre.next = head;
    }

    return dumpy.next;

};
// @lc code=end


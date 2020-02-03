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

    let pre = null;
    let cur = head;
    let next;

    while(cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre
};


// 2. 借用「堆栈」
var reverseList = function(head) {
    if(head == null || head.next == null) return head;

    let stack = [];
    let p = head;
    let isFist = true;
    let newHead;

    while(p !== null) {
        stack.push(p.val);
        p = p.next;
    }

    while(stack.length > 0) {
        let val = stack.pop();
        let newNode = new ListNode(val);
        if(isFist) {
            newHead = newNode
            p = newNode;
            isFist = false;
        } else {
            p.next = newNode;
            p = newNode;
        }
    }

    return newHead;
};

// 3. 递归
var reverseList = function(head) {
    if(head == null || head.next == null) return head;

    let cur = reverseList(head.next);

    head.next.next = head; // 函数内部，将「当前node」和「下一个node」指针对调

    head.next = null; // 将「当前node」的next指向「null」

    return cur;
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if(s === null || s.length % 2 === 1) return false;
    if(s === '') return true;

    let arr = s.split("");
    let stack = [];
    let hash = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    while(arr.length > 0) {
        let temp = arr.shift();

        if(temp in hash) {
            let top = stack.length - 1;
            if(stack[top] === hash[temp]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(temp);
        }
    }

    if(stack.length === 0) {
        return true;
    }

    return false;


};
// @lc code=end


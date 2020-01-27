/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


// 注：使用「递归」可能造成「超时」

// 1. 使用「备忘录」

var climbStairs = function(n) {
    if(n <= 2) return n;

    let arr = [0, 1, 2]


    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr[n]

};

// 3. 「备忘录」只记录最后3个数字
var climbStairs = function(n) {
    if(n <= 2) return n;

    let f1 = 1;
    let f2 = 2;
    let f3 = 0;

    for(let i = 3; i <= n; i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3
    }

    return f3

};
// @lc code=end


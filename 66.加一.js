/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    var i = digits.length - 1;

    var flag = 0;

    while(i >= 0) {
        if(i === digits.length - 1) {
            digits[i] = digits[i] + 1;
        }
        if(flag === 1) {
            digits[i] += 1;
            flag = 0;
        }

        if(digits[i] > 9) {
            digits[i] -= 10;
            flag = 1;
        }
        i--;
    }

    if(flag === 1) {
        digits.unshift(1);
    }

    return digits;

};
// @lc code=end


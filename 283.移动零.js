/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



// 思路1：双指针法
var moveZeroes = function(nums) {
    if(nums.length < 2) return nums;

    var i = 0;
    var j = 0;
    var temp;

    for(; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[j++] = nums[i]
        }
    }

    for(; j < nums.length; j++) {
        nums[j] = 0
    }
    return nums
};

// @lc code=end


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

    while(j < nums.length) {
        if(nums[j] !== 0) {
            nums[i++] = nums[j];
        }
        j++;
    }

    while(i < nums.length) {
        nums[i++] = 0;
    }

    return nums;
};


// 思路2：模拟「插入排序」算法，从后向前遍历，找到第一个不为0的数，插入到其后面
// 因为题目中说「保持非0元素相对位置不变」，所以联想到了「稳定排序」


var moveZeroes = function(nums) {
    if(nums.length < 2) return nums;

    for(let i = 1; i < nums.length; i++) {
        let temp = nums[i];

        for(var j = i; j >=0 && nums[j - 1]=== 0; j--) {
            nums[j] = nums[j - 1];
        }
        
        nums[j] = temp;
    }

    return nums;
}


// @lc code=end


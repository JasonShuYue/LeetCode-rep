/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  双指针法：指针i记录数字「合理位置」，指针j用于遍历
var removeDuplicates = function(nums) {

    if(nums.length < 2) return nums;

    let len = nums.length;
    let i = 0, j = 0;

    while(j < len) {
        if(nums[j] == nums[i]) {
            j++
        } else {
            nums[++i] = nums[j++]
        }
        
    }

    return i + 1
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  1. 夹逼法
var threeSum = function(nums) {
    let result = [];
    let len = nums.length;
    if(nums == null || len < 3) return result;

    nums = nums.sort((a, b) => a -b); // 排序，注意：如果直接使用「sort」会出问题，负数的排序


    for(let k = 0; k < len - 2; k++) {
        if(nums[k] > 0) return result; // 如果「基数」都大于0，那么之后的数都大于0，则可以直接返回结果

        if(k > 0 && nums[k] == nums[k - 1]) continue; // 对「基数」进行「去重」

        for(let i = k + 1, j = len - 1; i < j;) {
            let sum = nums[k] + nums[i] + nums[j];
            if(sum == 0) {
                result.push([nums[k], nums[i], nums[j]]);
                while(i < j && nums[i] == nums[i + 1]) i++; // 对「左指针」去重
                while(i < j && nums[j] == nums[j - 1]) j--; // 对「右指针」去重
                i++;
                j--;
            } else {
                if(sum < 0) i++;
                else j--;
            }
        }
    }

    return result;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 三指针法，i和j从m和n开始倒着遍历，k指向nums1最后一位向前依次放nums[i]和nums[j]比较大的值
var merge = function(nums1, m, nums2, n) {
    // [0]\n0\n[1]\n1
    
    if(m === 0) {
       for(let i = 0; i < nums2.length;i++) {
            nums1[i] = nums2[i];
       }
       return nums1;
    };

    
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(i !== -1 && j !== -1) {
        nums1[k--] = nums1[i] <= nums2[j] ? nums2[j--] : nums1[i--];
    }

    // 处理nums2还没处理完
    while(j !== -1) {
        nums1[k--] = nums2[j--]
    }

    return nums1;
};
// @lc code=end


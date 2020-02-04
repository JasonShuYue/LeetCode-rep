/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  1. 使用数组的方法「pop」和「unshift」
var rotate = function(nums, k) {

    let count = 0;

    while(count < k) {
        temp = nums.pop();
        nums.unshift(temp)
        count++;
    }

    return nums;
};

// 2. 使用反转
// 步骤1： 将数组所有元素反转 [7, 6, 5, 4, 3, 2, 1]
// 步骤2：反转前k个元素，[5, 6, 7, 4, 3, 2, 1]
// 步骤3：翻转后n-k个元素[5, 6, 7, 1, 2, 3, 4] 得到结果
var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;

    if(k === 0) return nums;


    // step1
    nums = reverseArr(nums, 0 , len - 1);
    console.log(nums)
    // step2
    nums = reverseArr(nums, 0, k - 1);
    console.log(nums)
    // step3
    nums = reverseArr(nums, k, len - 1)
    console.log(nums)

    return nums;
    
};


var reverseArr = function(arr, start, end) {
    if(start >= end) return arr;

    let i = start;
    let j = end;

    while(i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}

// @lc code=end


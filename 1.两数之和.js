/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  1. 枚举法
var twoSum = function(nums, target) {

    if(nums == null || nums.length < 2) return [];

    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }

    return [];
};

// 2. hash表
var twoSum = function(nums, target) {

    if(nums == null || nums.length < 2) return [];

    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        let right = target - nums[i];

        if(right in hash) {
            return [hash[right], i]
        } else {
            hash[nums[i]] = i 
        }
    }

    return [];

};




// @lc code=end


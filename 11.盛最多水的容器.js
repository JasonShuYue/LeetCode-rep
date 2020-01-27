/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 1. 枚举：left bar x, right bar y , (x - y) * weight

// 2. 夹逼准则，核心：随着横坐标宽度变小，「最小高度」必须更大

// 1. 枚举法
var maxArea = function(height) {
    let maxSize = 0;

    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            size = Math.min(height[i], height[j]) * (j - i)
            maxSize =  size > maxSize ? size : maxSize;
        }
    }
    return maxSize;
};

// 2. 夹逼准则
var maxArea = function(height) {
    let maxSize = 0;

    for(let i = 0, j = height.length - 1; i < j;) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--];
        let area = minHeight * (j - i + 1);
        maxSize = maxSize < area ? area : maxSize;
        console.log(area, i, j)
        
    }


    return maxSize;
}

// @lc code=end


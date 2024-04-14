/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }  
    let sumLeft = 0;
    let sumRight = totalSum;
    
    for (let i = 0; i < nums.length; i++) {
        sumRight -= nums[i];
        if (sumLeft === sumRight) {
            return i;
        }  
        sumLeft += nums[i];
    }
    
    return -1;
};

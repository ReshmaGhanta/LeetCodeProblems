/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums=nums.sort((a,b)=>a-b);
    let num = Math.floor(nums.length/2)
    return nums[num];
};
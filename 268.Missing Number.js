/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let distinct=0;
    for(let i=0;i<nums.length;i++){
        distinct^=nums[i];
    }
    for(let i=0;i<=nums.length;i++){
        distinct^=i;
    }
    return distinct;
};
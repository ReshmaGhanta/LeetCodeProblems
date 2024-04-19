/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let max=-Infinity; let sum=0;

   if (nums.length === 1) return nums[0];

   for(let i=0;i<nums.length;i++){
         sum+=nums[i];
         max=Math.max(max,sum)
          if (sum < 0) {
            sum = 0;
          }
   } 
   return max;
};

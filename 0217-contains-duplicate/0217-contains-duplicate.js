/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let unique=new Set();
     for(let i=0;i<nums.length;i++){
         if(!unique.has(nums[i])){
              unique.add(nums[i])
         }else{
            return true;
            break
         }
     }
     return false
};
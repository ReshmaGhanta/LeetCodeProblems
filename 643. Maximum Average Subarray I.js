/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left=0;
    let right=0;
    let average=0;
    let sum=0;
    let maxSum=-Infinity

   for(let right=0; right<nums.length; right++){
        sum+=nums[right];
        if(right+1>=k){
            if(sum>maxSum){
                maxSum=sum;
            }
            sum-=nums[left];
            left++;
        }
    }

    average= maxSum/k
    return average;
};
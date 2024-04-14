/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
  let maxAverage = -Infinity;
  let sum = 0;
  let left=0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];   
    if (right+1 >= k) {
      let average = sum / k;
      maxAverage = Math.max(maxAverage, average);
      sum -= nums[left];
      left++;
    }
  }

  return maxAverage;
};

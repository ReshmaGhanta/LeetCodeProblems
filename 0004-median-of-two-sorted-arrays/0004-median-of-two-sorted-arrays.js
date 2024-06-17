/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Step 1: Merge both arrays and sort them. Merging O(n+m).. sorting O(log(n+m)) Overall O(n+m(log(n+m)))
    let sortedArr=[...nums1,...nums2];
    sortedArr=sortedArr.sort((a, b) => a - b);

  // Step 2: Calculate mid element
    const mid = Math.floor(sortedArr.length / 2);

  // Step 3: Calculate the median
  if (sortedArr.length % 2 === 0) {
    // If even, average the two middle numbers
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    // If odd, return the middle number
    return sortedArr[mid];
  }
};
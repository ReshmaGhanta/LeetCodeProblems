/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let unique1=new Set(nums1);
    let unique2=new Set(nums2);
    for(item of unique1){
        if(unique2.has(item)){
            unique1.delete(item);
            unique2.delete(item);
        }
    }   
    return [[...unique1],[...unique2]]
};
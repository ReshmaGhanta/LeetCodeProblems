/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let uniq1=new Set(nums1);
    let uniq2=new Set(nums2);
    let result=[];
    
    uniq1.forEach(item => {
        if (uniq2.has(item)) {
            result.push(item);
        }
    });
    return result;
};

// T.C => O(N)
// S.C => O(N+M)
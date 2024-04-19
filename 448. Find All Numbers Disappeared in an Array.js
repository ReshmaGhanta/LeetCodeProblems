/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let unique=new Set(nums);
    let missing=[];
    for(let i=1;i<=nums.length;i++){
         if(!unique.has(i)){
             missing.push(i)
         }
    }
    return missing;
};

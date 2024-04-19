/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map= new Map();
    for(let i=0;i<nums.length;i++){
        let search=target-nums[i];
        if(map.has(search)){
            return [i,map.get(search)]
        }
        map.set(nums[i],i)
    }
   
};

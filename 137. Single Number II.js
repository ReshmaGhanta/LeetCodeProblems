/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result=0;
    for(let j=0;j<32;j++){
        let count=0;
    for(let i=0;i<nums.length;i++){
        if(((nums[i]>>j)&1)==1){
            count++;
        }
        }
                if(count%3==1){
           result=result+(1<<j);
    }
     
    }
    return result;
};
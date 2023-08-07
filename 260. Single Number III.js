/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    let tempVal=0;
    for(let i=0;i<nums.length;i++){
        tempVal=tempVal^nums[i];
    }
    let bitPos=0;
     for(let i=0;i<32;i++){
       if(((tempVal>>i)&1)==1){
        bitPos=i;
        }
     }

     let p=0,q=0;
     for(let j=0;j<nums.length;j++){
          if(((nums[j]>>bitPos)&1)==1){
              p=p^nums[j];
          }else{
              q=q^nums[j];
          }
     }

    let result=[p,q];
     return result;

};
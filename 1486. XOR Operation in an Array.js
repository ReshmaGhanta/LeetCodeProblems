/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let nums=[];
    let xorVal=0;
    for(let i=0;i<n;i++){
        nums[i]=start + 2 * i;
        xorVal=xorVal^nums[i];
    }
    return xorVal;
};
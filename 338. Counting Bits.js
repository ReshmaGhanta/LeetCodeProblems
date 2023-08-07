/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let arr=[];
    for(let i=0;i<=n;i++){
        let count=0;
        for(let j=0;j<31;j++){
            if(((i>>j)&1)==1){
                count++;
            }
        }
        arr[i]=count;
    }

    return arr;
};
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    let countArr=[];
    let tempArr=[];
    for(let i=0;i<arr.length;i++){
        let count=0;
      for(let j=0;j<32;j++){
          if(((arr[i]>>j)&1)==1){
              count++;
          }
      }
        countArr[i]=count;
    }
    // used bubble sort
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){ 
            if(countArr[j]>countArr[j+1]||countArr[j]==countArr[j+1] && arr[j]>arr[j+1])
            {
                let temp=countArr[j];
                countArr[j]=countArr[j+1];
                countArr[j+1]=temp;

                 temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

            }
        }
    }
        return arr;
};
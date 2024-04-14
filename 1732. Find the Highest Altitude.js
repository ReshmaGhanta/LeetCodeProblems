/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest=0;
    let sum=0;
    for(let i=0;i<gain.length;i++){
          sum+=gain[i];
          if(sum>highest){
            highest=sum;
          }
    }
    return highest;
};

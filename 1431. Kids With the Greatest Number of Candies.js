/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result=[];
     let candyMax=0;
     for(let i=0;i<candies.length;i++){
          candyMax=Math.max(candyMax,candies[i])
     }
    for(let i=0;i<candies.length;i++){
          let extra=candies[i]+extraCandies;
        if(extra>=candyMax){
            result.push(true)
        }else{
            result.push(false)
        }
    }

  return result;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let count=0;
    let jewArr= jewels.split("");
    let stoArr=stones.split("")
    for(let i=0;i<jewArr.length;i++){
        for(let j=0;j<stoArr.length;j++){
            if(jewArr[i]==stoArr[j]){
                count++
            }
        }
    }
    return count
};
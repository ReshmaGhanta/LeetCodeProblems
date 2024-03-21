/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left=0;
    let right=0;
    let indices=[];
    const pMap = new Map();
    let pArr=p.split("");
    let sArr=s.split("");
    let matched=0;

     for(char of pArr){
         if(!pMap.has(char)){
            pMap.set(char,1)
         }else{
            const currentValue = pMap.get(char);
             pMap.set(char, currentValue + 1);
         }
     }

     for(let right=0;right<sArr.length; right++){
           if(pMap.has(sArr[right])){
               pMap.set(sArr[right],pMap.get(sArr[right])-1);
              if(pMap.get(sArr[right])===0){
                matched++;
              }
           }
            if (matched === pMap.size) {
            indices.push(left);
            }


        if (right>= p.length - 1) {
            const leftChar = s[left];
            left++;
            if (pMap.has(leftChar)) {
                if (pMap.get(leftChar) === 0) {
                    matched--;
                }
                pMap.set(leftChar, pMap.get(leftChar) + 1);
            }
        }
     } 

    return indices;
};
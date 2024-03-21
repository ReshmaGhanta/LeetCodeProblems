/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length){
         return false;
    }

    let left=0;
    let right=0;
    
    const s1Map = new Map();

for(char of s1){
         if(!s1Map.has(char)){
            s1Map.set(char,1)
         }else{
            const currentValue = s1Map.get(char);
             s1Map.set(char, currentValue + 1);
         }
     }
let matched=0;

for(let right=0;right<s2.length; right++){
          const rightChar = s2[right];
           if(s1Map.has(rightChar)){
               s1Map.set(rightChar,s1Map.get(rightChar)-1);
              if(s1Map.get(rightChar)===0){
                matched++;
              }
           }
            if (matched === s1Map.size) {
              return true;
            }


        if (right>= s1.length - 1) {
            const leftChar = s2[left];
            left++;
            if (s1Map.has(leftChar)) {
                if (s1Map.get(leftChar) === 0) {
                    matched--;
                }
                s1Map.set(leftChar, s1Map.get(leftChar) + 1);
            }
        }
     } 

    return false;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
const vowels=['a','e','i','o','u'];
let max=0;
let left=0;
let count=0
    for(let right=0;right<s.length;right++){
        if(vowels.includes(s[right])){
            count++;
        }
        if(right-left+1>k){
            if(vowels.includes(s[left])){
                count--;
            }
            left++
        }

        max=Math.max(max,count);
    }

    return max;
};


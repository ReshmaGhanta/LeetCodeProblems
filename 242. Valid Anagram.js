/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
  let letterCount = {};

 for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (letterCount[letter]) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
    }
}

 for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (letterCount[letter]) {
         letterCount[letter]--;
    }else{
        return false
    } 
}

  return true;
};

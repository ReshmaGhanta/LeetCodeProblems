/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let random=0;
    for(let i=0;i<s.length;i++){
        random=random^s.charCodeAt(i);
    }
      for(let i=0;i<t1.length;i++){
        random=random^t.charCodeAt(i);
    }
    return String.fromCharCode(random);
}

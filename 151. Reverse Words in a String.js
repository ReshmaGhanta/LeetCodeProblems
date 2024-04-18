/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.split(' ');
    let revString=[];
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!=''){
            revString.push(s[i])
        }
    }

    return revString.join(' ');
};

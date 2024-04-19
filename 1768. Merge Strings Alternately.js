var mergeAlternately = function(word1, word2) {
    let mergedWord=[];
       
   if(word1.length===word2.length){
    for (let i = 0; i <word1.length; i++) {     
           mergedWord.push(word1[i]);
           mergedWord.push(word2[i]);
       }
    }
  
   if(word1.length>word2.length){
    for (let i = 0; i < word1.length; i++) {     
           mergedWord.push(word1[i]);
           if(word2[i]!==undefined)
           mergedWord.push(word2[i]);
       }
    }

    if(word2.length>word1.length){
    for (let i = 0; i < word2.length; i++) { 
          if(word1[i]!==undefined){
            mergedWord.push(word1[i]);
          }    
           mergedWord.push(word2[i]);
       }
    }

   return mergedWord.join('')
}; 

var mergeAlternately = function(word1, word2) {
    let totalLength = word1.length + word2.length;
    let finalStr = [];
    for(let i=0; i<totalLength; i++) {
        finalStr.push(word1[i]);
        finalStr.push(word2[i]);
    }
    return finalStr.join('');
}; 

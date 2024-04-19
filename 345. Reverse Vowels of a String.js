/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels='aeiouAEIOU';
   let low=0;
   let high=s.length-1;
   s=s.split('');

   while(low<high){
        if(!vowels.includes(s[low])){
            low++;
        }else if(!vowels.includes(s[high])){
            high--;
        }else{
                let temp=s[low];
                s[low]=s[high];
                s[high]=temp;
                
                low++;
                high--;
        }
   }
return s.join('');
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let i = a.length - 1;
   let j = b.length - 1;
   let carry = 0;
   let result = '';
   while (i >= 0 || j >= 0 || carry > 0) {
       const num1 = i >= 0 ? parseInt(a[i]) : 0;
       const num2 = j >= 0 ? parseInt(b[j]) : 0;
       const sum = num1 + num2 + carry;
       const bit = sum % 2;
       carry = Math.floor(sum / 2);
       result = bit + result;
       i--;
       j--;
   }
   return result;
   //return sum.toString(2); // convers binary to integer and returns it
};
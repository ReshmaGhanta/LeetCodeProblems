/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (c < 0) return false;
    
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    
    while (left <= right) {
        let sumSquares = left * left + right * right;
        if (sumSquares === c) {
            return true;
        } else if (sumSquares < c) {
            left++;
        } else {
            right--;
        }
    }
    
    return false;
};
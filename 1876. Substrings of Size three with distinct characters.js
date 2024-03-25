/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;

    for (let i = 0; i < s.length - 2; i++) {
        let substr = s.substring(i, i + 3);
        if (isGood(substr)) {
            count++;
        }
    }

    return count;
};

function isGood(substr) {
    let distinct = new Set(substr);
    return distinct.size === 3;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) {
        return false
    }

    let left = 0;
    let right = t.length;
    for (let i = 0; i < right; i++) {
        if (s[left] == t[i])
            left++;
    }
    if (left === s.length) {
        return true
    } else {
        return false
    }
};

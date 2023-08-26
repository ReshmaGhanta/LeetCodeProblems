/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let set = new Set();

    for (let i = 0; i<arr.length; i++) {
        let ele = arr[i]
        if (set.has(2*ele) || set.has(ele/2)) return true 
        set.add(ele)
    }

    return false;
} 
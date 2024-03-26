var maxFreq = function(s, maxLetters, minSize, maxSize) {
    const map = new Map();
    let maxOccurrences = 0;

    for (let left = 0, right = minSize; right <= s.length; left++, right++) {
        const substr = s.substring(left, right);
        map.set(substr, (map.get(substr) || 0) + 1);
    }

    for (let substr of map.keys()) {
        const count = map.get(substr);
        if (count > maxOccurrences && isValidSubstring(substr, maxLetters)) {
            maxOccurrences = count;
        }
    }

    return maxOccurrences;
};

var isValidSubstring = function(substr, maxLetters) {
    const counts = new Set();
    for (let i = 0; i < substr.length; i++) {
        const c = substr.charAt(i);
        counts.add(c);
    }
    return counts.size <= maxLetters;
};

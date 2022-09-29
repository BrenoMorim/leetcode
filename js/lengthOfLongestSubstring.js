/**
 * Function that calculates the length of the longest substring
 * that doesn't repeat any characters
 * 
 * @param {string} s
 * @return {number} length
 */
 function lengthOfLongestSubstring(s) {
    const chars = s.split('');
    let maxLength = 0;
    let matches = [];

    chars.forEach(char => {
        const indexFound = matches.indexOf(char);
        if (indexFound !== -1) {
            matches = matches.slice(indexFound + 1);
        }
        matches.push(char);
        maxLength = Math.max(maxLength, matches.length);
    });
    return maxLength;
};

// Tests

console.log(lengthOfLongestSubstring("aabc")); // 3
console.log(lengthOfLongestSubstring("brasil")); // 6
console.log(lengthOfLongestSubstring("arara")); // 2
console.log(lengthOfLongestSubstring("pwwkew")); // 3
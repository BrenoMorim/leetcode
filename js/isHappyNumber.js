/**
 * Checks if the number is happy (the sum of the squares of its digits needs to be 1 at some point):
 * For example, 19 is happy, because:
 * 1**2 + 9**2 = 82
 * 8**2 + 2**2 = 68
 * 6**2 + 8**2 = 100
 * 1**2 + 0**2 + 0*22 = 1 
 * While 2, wouldn't be a happy number
 * 
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let counter = 0;
    // We have to set a counter, in order to avoid infinite loops
    while (n > 1 && counter < 30) {
        const digits = n.toString().split("");
        let squaresSum = 0;
        digits.forEach(digit => squaresSum += Number(digit) ** 2);
        n = squaresSum;
        counter++;
    }   
    return n == 1;
};

// Tests

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(1)); // true
console.log(isHappy(50)); // false

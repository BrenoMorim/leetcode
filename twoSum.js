/**
* Dado um array de números e um resultado esperado, a função deve retornar o indíce
* de dois números do array que se somados chegam no resultado esperado
*/
/**
 * Given an array of numbers and a target number,
 * tries to find two indexes of the array that if added equals the target number
 */
/**
 * @param {*} nums array of numbers
 * @param {*} target the result we want to reach through the sum of two numbers of the array
 * @returns an array with the indexes of the two numbers found, which can be empty if there's no result
 */
function twoSum(nums, target) {
    target_minus_nums = nums.map(num => target - num);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let j = target_minus_nums.indexOf(nums[i]);
        if (j !== -1 && i !== j) {
            result = [i, j];
            break;
        } 
    }
    return result;
}

// Tests

console.log(twoSum([2, 3, 6, 7, 10], 17)); // Expected = [3, 4]
console.log(twoSum([2, 2, 4, 7], 4)); // [0, 1]
console.log(twoSum([1, 10, 24, 21], 31)); // [1, 3]
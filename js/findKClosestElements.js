/**
 * Procura os k elementos mais próximos a x em um array, o resultado
 * deve ser um array ordenado de forma crescente com aqueles mais próximos a x. 
 */
/**
 * Finds the k closest elements to x in the array
 * 
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    // Array with the differences and indexes stored
    const diff = arr.map((num, index) => {return {difference: Math.abs(num - x), index}});
    
    // Then we sort the array to get the closest numbers to x
    diff.sort((a, b) => a.difference - b.difference);
    const closestElements = [];

    // Now we just have to add the closest numbers by accessing the original array in the right positions
    for (let i = 0; i < k; i++) {
        closestElements.push(arr[diff[i].index]);
    }

    // Also sorting the result in ascending order
    return closestElements.sort((a, b) => a - b);
};

// Tests

console.log(findClosestElements([-1, -2, -3, 10], 3, 10)); // [-2, -1, 10]
console.log(findClosestElements([-1, -2, 10, 12, 16], 2, 5)); // [-1, 10]
/**
 * Dado um número inteiro, a função retorna um número romano equivalente, através
 * de um forEach de um array com os valores de cada número romano em inteiro,
 * usando a lógica de divisão inteira para descobrir quantos algarismos romanos
 * devem ser adicionados e quanto deve ser subtraído do número inicial
 */
/**
 * Given an integer number, the function turns it into a roman number
 */
function intToRoman(num: number): string {
    let roman = '';

    romanValues.forEach(n => {
        const division = Math.floor(num / n.value);
        num -= division * n.value;
        roman += n.roman.repeat(division);
    });

    // Special cases:

    roman = roman.replace('CCCC', 'CD'); // 400
    roman = roman.replace('DCD', 'CM'); // 900
    roman = roman.replace('LXXXX', 'XC'); // 90
    roman = roman.replace('XXXX', 'XL'); // 40
    roman = roman.replace('VIIII', 'IX'); // 9
    roman = roman.replace('IIII', 'IV'); // 4

    return roman;
};

const romanValues = [
    {roman: 'M', value: 1000},
    {roman: 'D', value: 500},
    {roman: 'C', value: 100},
    {roman: 'L', value: 50},
    {roman: 'X', value: 10},
    {roman: 'V', value: 5},
    {roman: 'I', value: 1},
];

// Tests

console.log(intToRoman(1994)); // MCMXCIV
console.log(intToRoman(19)); // XIX
console.log(intToRoman(36)); // XXXVI
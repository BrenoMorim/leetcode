/**
 * O objetivo desse desafio é converter um número romano para um número inteiro
 */
/**
 * Given a roman number, you have to turn it into an integer
 */
function romanToInt(s: string): number {
    let expression = '';
    while(s.length > 0) {    
        numbers.forEach(num => {
            if (s.includes(num.roman)) {
                s = s.replace(num.roman, '');
                expression += ' ' + num.value;
            }
        })
    }
    const integers = expression.split(' ').map(num => Number(num));
    let sum = 0;
    integers.forEach(num => sum += num);
    return sum;
};

const numbers = [
    {roman: 'IV', value: 4},
    {roman: 'IX', value: 9},
    {roman: 'XL', value: 40},
    {roman: 'XC', value: 90},
    {roman: 'CD', value: 400},
    {roman: 'CM', value: 900},
    {roman: 'I', value: 1},
    {roman: 'V', value: 5},
    {roman: 'X', value: 10},
    {roman: 'L', value: 50},
    {roman: 'C', value: 100},
    {roman: 'D', value: 500},
    {roman: 'M', value: 1000}
];

console.log(romanToInt('CDXIX'));
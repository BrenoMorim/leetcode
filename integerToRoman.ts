/**
 * Dado um número inteiro, a função retorna um número romano equivalente, através
 * de um loop while que a cada ciclo vai subtraindo o número inteiro enquanto constrói o romano
 */
/**
 * Given an integer number, the function turns it into a roman number
 */
function intToRoman(num: number): string {
    let roman = '';
    while (num > 0) {
        if (num >= 1000) {
            roman += 'M';
            num -= 1000;
            continue;
        }
        if (num >= 500) {
            roman += 'D';
            num -= 500;
            continue;
        }
        if (num >= 100) {
            roman += 'C';
            num -= 100;
            continue;
        }
        if (num >= 50) {
            roman += 'L';
            num -= 50;
            continue;
        }
        if (num >= 10) {
            roman += 'X';
            num -= 10;
            continue;
        }
        if (num >= 5) {
            roman += 'V';
            num -= 5;
            continue;
        }
        if (num >= 1) {
            roman += 'I';
            num -= 1;
            continue;
        }
    }
    // Special cases:
    // 400
    roman = roman.replace('CCCC', 'CD');
    // 900
    roman = roman.replace('DCD', 'CM');
    // 90
    roman = roman.replace('LXXXX', 'XC');
    // 40
    roman = roman.replace('XXXX', 'XL');
    // 9
    roman = roman.replace('VIIII', 'IX');
    // 4
    roman = roman.replace('IIII', 'IV');
    return roman;
};

console.log(intToRoman(1994));
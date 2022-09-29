/**
 * O objetivo deste desafio é invertere os dígitos de um número inteiro,
 * respeitando tanto o sinal do número quanto os valores máximo e mínimo que um inteiro de 32-bit pode ter,
 * retornando 0 nos casos onde o número é muito grande ou muito pequeno 
 */
/**
 * Function that reverses the digits of an integer, 
 * respecting the interval of max and min values of 32-bit integers
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const isNegative = x < 0;
    // removes the - to avoid exceptions when converting to Number after reversion
    const s = String(x).replace("-", "").split("");
    let reversedNumber = Number(s.reverse().join(""));
    if (isNegative) reversedNumber = reversedNumber * (-1);

    if (reversedNumber <= ((-2)**31) || reversedNumber >= (2**31 - 1)) {
        return 0;
    }

    return reversedNumber;
};

// Tests

console.log(reverse(3235)); // 5323
console.log(reverse(120)); // 21
console.log(reverse(4242423232323223218)); // 0

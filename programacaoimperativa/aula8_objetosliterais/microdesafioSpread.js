const numeroPrimos = [2, 3, 5, 7, 11, 13, 17];
const numeros = [20, 30, 40, 50, ...numeroPrimos];

console.log(numeros);

function maiorNumero(...n) {
    return Math.min(...n);
}

console.log(' ');
console.log('----------------------------------------------');
console.log(' ');

console.log(maiorNumero(7, 10, 56, 12, 15));
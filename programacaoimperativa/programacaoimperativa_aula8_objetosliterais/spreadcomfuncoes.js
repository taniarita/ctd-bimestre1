//spread com funçoes

let numero = [10, 2, 33, 14, 511, 6, 7, 8];

//utilizando spread operator para mostrar através da função min e max o maior valor e o menor valor

console.log('maior número:', Math.max(...numero));
console.log('menor número:', Math.min(...numero));

function temp(...numeros) {
    console.log(numeros);
}
temp(1, 2, 3, 8, 6, 'asdasd');


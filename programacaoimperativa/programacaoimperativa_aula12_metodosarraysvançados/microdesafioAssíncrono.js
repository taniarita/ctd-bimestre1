// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
const pares = [2, 4, 6, 8, 10];
// const impares = el => el + 1;
// console.log(pares.map(impares));
const impares = pares.map(par => par + 1);
console.log(impares)
console.log(' ');

// - Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
const nomes = ['Maria', 'Ângela', 'Ana', 'Maria', 'Luiza'];
// const nomeSelecionado = el => el == 'Maria';
// console.log(nomes.filter(nomeSelecionado));
const nomeSelecionado = nomes.filter(nome => nome == 'Maria');
console.log(nomeSelecionado);
console.log(' ');

// - Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
const numeros = [1, 5, 9, 3, 7];
const numerosFormatados = numeros.reduce((acc, num) => {
    // console.log({acc, num}) // imprime o objeto com as propriedade acc e num
    return acc + '-' + num;
});
console.log(numerosFormatados);
console.log(' ');

// - Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
const animais = ['girafa', 'camelo', 'elefante', 'dragão'];
// animais.forEach(
//     function(el) {
//         console.log('O animal é ' + el)
//     }
// )

// const frase = el => console.log('O animal é ' + el);
// console.log(animais.forEach(frase));
animais.forEach(animal => console.log('O animal é ' + animal));



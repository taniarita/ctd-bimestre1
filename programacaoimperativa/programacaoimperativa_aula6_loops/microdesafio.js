for(valor = 1; valor <= 5; valor++) {
    console.log('Olá Mundo');
}
console.log(' ');
console.log('---------------------------------------------');
console.log(' ');



for(numero = 1; numero <= 10; numero+=2) {
    console.log(numero);
}

// for(numero = 1; numero <= 10; numero++) {
//     if(numero % 2 !== 0) {
//         console.log(numero);
//     }
// }

console.log(' ');
console.log('---------------------------------------------');
console.log(' ');


let numeros = 1
let tabuada = 1

for(numeros = 1; numeros <= 10; numeros++){
    console.log(numeros);
    for(tabuada = 1; tabuada <= 10; tabuada++){
        console.log(numeros * tabuada);
    }
}
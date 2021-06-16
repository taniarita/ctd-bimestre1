// function fizzBuzz(n1, n2) {
//     for(i = 1; i <= 100; i++) {
//         if(i % n1 === 0 && i % n2 === 0) {
//             console.log('FizzBuzz')
//         }
//         else if(i % n1 === 0) {
//             console.log('Fizz');            
//         }
//         else if(i % n2 === 0) {
//             console.log('Buzz');
//         }
//         else {
//             console.log(i);
//         }       
//     }
// }
// fizzBuzz(2,3);
// fizzBuzz(7,9);


// Avançado: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.

function fizzBuzz(n1, n2, fizz, buzz, fizzBuzz) {
    for(i = 1; i <= 100; i++) {
        if(i % n1 === 0 && i % n2 === 0) {
            console.log(fizzBuzz)
        }
        else if(i % n1 === 0) {
            console.log(fizz);            
        }
        else if(i % n2 === 0) {
            console.log(buzz);
        }
        else {
            console.log(i);
        }       
    }
}

fizzBuzz(2,5, 'teste1', 'teste2', 'teste3');




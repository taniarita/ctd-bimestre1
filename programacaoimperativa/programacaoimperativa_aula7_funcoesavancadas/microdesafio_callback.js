// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. 
// Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo 
// que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.



// function andar() {
//     console.log('O carro está andando.')
// }
let andar = () => console.log('O carro está andando.'); 

// function parar() {
//     console.log('O carro parou.');
// }
let parar = () => console.log('O carro parou.');

// function acaoCarro(callback) {
//     callback()
// }
let acaoCarro = callback => callback();

acaoCarro(andar);
acaoCarro(parar);


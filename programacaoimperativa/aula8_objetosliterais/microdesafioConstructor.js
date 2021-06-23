// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).
// Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

function Restaurante(nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function() {
        return 'Seja bem vinde ao ' + nome + '. \n' + 'Nosso cardápio é: ' + cardapio +'.';
    }
}

// class Restaurante {
//     constructor(nome, cardapio) {
//         this.nome = nome;
//         this.cardapio = cardapio;
//     }

//     entrada() {
//         return 'Seja bem vinde ao ' + this.nome + '. \n' + 'Nosso cardápio é: ' + this.cardapio + '.';
//     }

// }
// O constructor pega todos os parâmetros que eu passei para a instância e atribui para as variáveis internas da classe.

let restaurante = new Restaurante('Come Bem', ['marmita', ' sushi', ' pizza']);
// console.log(restaurante.nome);
// console.log(restaurante.cardapio);
// console.log(restaurante);
console.log(restaurante.entrada());


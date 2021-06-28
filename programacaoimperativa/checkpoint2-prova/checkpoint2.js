// 2 ͦ Checkpoint de programação imperativa
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

// com switch, if
// function menuMicroondas (alimento, tempo) {
//     switch (alimento) {
//         case 'macarrão':
//         case 'brigadeiro':
//             if(tempo < 8) {
//                 console.log('Tempo insufciente!');
//             }
//             else if(tempo >= 24) {
//                 console.log('Kabumm!');
//             }
//             else if(tempo >= 16) {
//                 console.log('A comida queimou!');
//             }
//             else {
//                 console.log('Prato pronto!')
//             }
//             break;
//         case 'pipoca':
//             if(tempo < 10) {
//                 console.log('Tempo insufciente!');
//             }
//             else if(tempo >= 30) {
//                 console.log('Kabumm!');
//             }
//             else if(tempo >= 20) {
//                 console.log('A comida queimou!');
//             }
//             else {
//                 console.log('Prato pronto!')
//             }
//             break;
//         case 'feijão':
//             if(tempo < 12) {
//                 console.log('Tempo insufciente!');
//             }
//             else if(tempo >= 36) {
//                 console.log('Kabumm!');
//             }
//             else if(tempo >= 24) {
//                 console.log('A comida queimou!');
//             }
//             else {
//                 console.log('Prato pronto!')
//             }
//             break;
//         case 'carne':
//             if(tempo < 15) {
//                 console.log('Tempo insufciente!');
//             } 
//             else if(tempo >= 45) {
//                 console.log('Kabumm!');
//             }
//             else if(tempo >= 30) {
//                 console.log('A comida queimou!');
//             }
//             else {
//                 console.log('Prato pronto!')
//             }
//             break;
//         default: 
//             console.log('Prato inexistente!');
//             break;
//     }
// }

/* pra não ficar com tantos if/elses repetitivos, extrair essa repetição para uma função 
chamada cozinhar, que recebe o tempo escolhido pela pesso e o tempo padrão como parâmetros. */
function cozinhar(tempo, tempoPadrao) {
    if(tempo < tempoPadrao) {
        console.log('Tempo insufciente!');
    }
    else if(tempo >= tempoPadrao * 3) {
        console.log('Kabumm!');
    }
    else if(tempo >= tempoPadrao * 2) {
        console.log('A comida queimou!');
    }
    else {
        console.log('Prato pronto!')
    }
}

//aqui, chamar a função cozinhar nos comandos das condições do switch.
function menuMicroondas (alimento, tempo) {
    switch (alimento) {
        case 'macarrão':
        case 'brigadeiro':
            cozinhar(tempo, 8);
            break;
        case 'pipoca':
            cozinhar(tempo, 10);
            break;
        case 'feijão':
            cozinhar(tempo, 12);
            break;
        case 'carne':
            cozinhar(tempo, 15);
            break;
        default: 
            console.log('Prato inexistente!');
            break;
    }
}

//invocando a função:
menuMicroondas('sopa', 10);
menuMicroondas('pipoca', 10);
menuMicroondas('brigadeiro', 7);
menuMicroondas('carne', 45);
menuMicroondas('feijão', 24);
menuMicroondas('macarrão', 24);


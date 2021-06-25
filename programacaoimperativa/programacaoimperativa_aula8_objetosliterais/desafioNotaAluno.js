// Crie o objeto de aluno, que consistirá nas seguintes propriedades básicas: Nome, Número do arquivo, Lista de notas.
// Gostaríamos de calcular a média do aluno e se o aluno foi aprovado com base na nota de aprovação que será dada. 
// Para este exercício, vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.

// - EXPLICAÇÃO!!!!
// 1 - O objeto aluno está na linha 33, quando eu o instancio usando o new através da função contrutora Aluno;
// 2 - Para calcular a média, eu criei um método na função contrutora chamado calculaMedia;
// 3 - O método calculaMédia usou um laço que percorreu o array de notas (this.notas.length) acumulando/somando as notas na variável somaNotas, que é a soma das notas;
// 4 - O método calculaMedia também utilizou a propriedade this.media para retornar média, que é a soma das notas dividida pela quantidade de notas (array this.notas.length);
// 5 - Criei outro método, chamado aprovacao, que recebeu uma nota mínima para ser aprovada, como parâmetro (mediaAprovacao) e retornou, por meio de ternário, se o aluno foi aprovado ou não;
// 6 - Instanciei o objeto (aluno) para poder utilizar os métodos da função construtora;

function Aluno(nome, numero, notas) {
    this.nome = nome;
    this.numero = numero;
    this.notas = notas;
    this.media = 0; // não quero que inicialize/ nesse caso eu não estou permitindo que o usuário defina o valor inicial da variável.

    this.calculaMedia = function() {
        let somaNotas = 0 
        for(i = 0; i < this.notas.length; i++){
            somaNotas += this.notas[i];
        }
        this.media = somaNotas / this.notas.length;
        return this.media;
    }

    this.aprovacao = function(mediaAprovacao) {
        return this.media > mediaAprovacao ? 'Aprovado' : 'Reprovado';
    }
}

const aluno = new Aluno('tania', 123, [10, 9, 8, 8.5]);
console.log(aluno.calculaMedia());
console.log(aluno.aprovacao(7));


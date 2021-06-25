// const conta = {
//     numero: 2,
//     saldo: 50,
//     nomeTitular: 'Ana',
//     deposito: function(valor) {
//         this.saldo += valor;
//         console.log('depósito | saldo atual: ' + this.saldo);
//     },
//     saque: function(valor) {
//         if(this.saldo < valor) {
//             console.log('Fundos Insuficientes')
//         } else {
//             this.saldo -= valor
//             console.log('saque | saldo atual:  ' + this.saldo)
//         }
//     }
// }

// console.log(conta.saldo)
// conta.deposito(100)
// conta.saque(50)
// conta.saque(150)

function Conta(numero, saldo, nome) {
    this.numero = numero;
    this.saldo = saldo;
    this.nome = nome;

    this.deposito = function(valor) {       
        this.saldo += valor;
        console.log('depósito | saldo atual: ' + this.saldo);
    };

    this.saque = function(valor) {
        if (this.saldo < valor) {
            console.log('Fundos Insuficientes');
        } else {
            this.saldo -= valor;
            // this.saldo = this.saldo - valor
            console.log('saque | saldo atual: ' + this.saldo);
        }
    }
}

const contaAna = new Conta(21545, 50, 'Ana');
console.log(contaAna.saldo);
contaAna.deposito(100)
contaAna.saque(50)
contaAna.saque(150)




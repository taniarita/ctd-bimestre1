console.log('O método join junta os elementos de uma array usando o separador que pode ser traço ou vírgula.');
let mercado = ['arroz', 'feijão', 'linguiça', 'macarrão'];
let separadosPorTraço = mercado.join('-');
console.log(separadosPorTraço);
console.log(' ')

console.log('o método push adiciona um ou mais elementos ao final de uma array');
let quitanda = ['uva', 'laranja', 'mamao', 'banana'];
let quitandaComAbacaxi = quitanda.push('abacaxi');
console.log(quitanda);
console.log(quitandaComAbacaxi);
console.log(' ')

console.log('o método pop elimina o último elemento de uma array');
let papelaria = ['caderno', 'lápis', 'caneta', 'borracha'];
let papelariaSemBorracha = papelaria.pop();
console.log(papelaria);
console.log(papelariaSemBorracha);
console.log(' ')

console.log('o método shift elimina o primeiro elemento de uma array');
let feira = ['alface', 'agrião', 'repolho', 'ovos', 'manjericao'];
let feiraSemAlface = feira.shift();
console.log(feira);
console.log(feiraSemAlface);
console.log(' ')

console.log('o método unshifit adiciona um ou mais elementos ao início de uma array');
let escritorio = ['mesa', 'cadeira'];
let escritorioNovo = escritorio.unshift('armário',  'impressora');
console.log(escritorio);
console.log(escritorioNovo);
console.log(' ')

console.log('o método indexOf procura o elemento pela array e volta o índice');
let bolo = ['farinha', 'chocolate', 'manteiga', 'fermento'];
let ondeQueTa = bolo.indexOf('chocolate');
console.log(ondeQueTa);
let ondeQueTa2 = bolo.indexOf('creme');
console.log(ondeQueTa2);
console.log(' ')

console.log('o método lastIndexOf entrega o índice começando pelo final da array');
let sentimentos = ['alegria', 'euforia', 'tristeza', 'raiva', 'euforia', 'amor'];
console.log(sentimentos.lastIndexOf('euforia'));
console.log(sentimentos.lastIndexOf('gratidão'));
console.log(' ')

console.log('o método includes, similar ao indexOf, retorna um booleano');
let cidades = ['sampã', 'belohorizonte', 'salvador', 'floripa'];
console.log(cidades.includes('sampã'));
console.log(cidades.includes('palmas'));

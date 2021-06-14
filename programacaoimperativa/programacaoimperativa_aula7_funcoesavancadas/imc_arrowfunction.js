// let imc = (peso, altura) => console.log(peso/(altura **2));
// imc(70, 1.80);

let imc = (peso, altura) => console.log((peso/Math.pow(altura, 2)).toFixed(1));
imc(70, 1.80);


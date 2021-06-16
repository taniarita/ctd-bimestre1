// function fatorial(num) {
//     let fat = 1;
//     for(i = 1; i <= num; i++) {
//         fat *= i; 
//     }
//     return fat
// }
// console.log(fatorial(7))


//com recursividade
function fatorial(num) {
    if(num < 0) return;
    if(num === 0) return 1;
    return num * fatorial(num - 1); 
}
console.log(fatorial(7));





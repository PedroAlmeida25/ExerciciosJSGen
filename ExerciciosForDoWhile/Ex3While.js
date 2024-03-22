const leia = require("readline-sync");

//Declarando as variáveis
let num;
let menorQue21 = 0
let maiorQue50 = 0;

while(true){
    num = leia.questionInt("\n Informe uma idade: ");
    if(num<0) break;
    if(num<21) menorQue21++;
    if(num>50) maiorQue50++;
}

console.log("\nQuantidade de pessoas menores que 21 anos: " + menorQue21);
console.log("\nQuantidade de pessoas maiores que 50 anos: " + maiorQue50);

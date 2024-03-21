const leia = require('readline-sync');

//Declarando as variáveis
let a; 
let b;
let c;

//Informando os números digitados
a = leia.questionFloat("\nInforme o primeiro numero: ");
b = leia.questionFloat("\nInforme o segundo numero: ");
c = leia.questionFloat("\nInforme o terceiro numero: ");

//Condição dos números
if(a + b > c){
    console.log("\nA soma de A+B é maior que C");
}else if(a + b < c){
    console.log("\nA soma de A+B é menor que C");
}else{
    console.log("\n A soma de A+B é igual a C");
}
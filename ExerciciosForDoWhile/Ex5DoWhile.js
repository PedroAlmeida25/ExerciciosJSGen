const leia = require("readline-sync");

//Declarando as variáveis
let num;
let soma = 0;

//Processo para a soma dos números
do{
    num = leia.questionInt("\n Informe um numero: ")
    soma += num;
}while(num !== 0);

console.log("A soma de todos os numeros sao: " + soma);
const leia = require('readline-sync');

//Declarando as variáveis
let num1, num2;
let operacao;

//Informando os números informados
num1 = leia.questionFloat("Informe o primeiro numero: ")
num2 = leia.questionFloat("Informe o segundo numero: ")

//Menu das operações
console.log("\n 1 -- Soma" +
            "\n 2 -- Subtração" +
            "\n 3 -- Multiplicação" +
            "\n 4 -- Divisão");

operacao = leia.questionInt("\nDigite a operacao que deseja visualizar: ")

//Resolução das operações
switch (operacao){
    case 1:
        console.log("O resultado dessa operação é: " + (num1+num2));
    break;

    case 2:
        console.log("O resultado dessa operacao e: " + (num1-num2));
    break;

    case 3:
        console.log("O resultado dessa operacao e: " + (num1*num2));
    break;

    case 4:
        console.log("O resultado dessa operacao e: " + (num1/num2));
    break;
}//fim do switch
            
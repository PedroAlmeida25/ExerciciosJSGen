const leia = require("readline-sync");

//Declarando as variáveis
let num;
let par = 0; 
let impar = 0;


//For para saber os números pares e ímpares
for(let i=0; i<10; i++){
    num = leia.questionInt("\n Informe um numero inteiro: ");
    if(num % 2 === 0){
        par++;
    }else{
        impar++;
    }
}

//Informando quantos números pares e ímpares
console.log("Quantidade de número pares: " + par);
console.log("Quantidade de número impares: " + impar);
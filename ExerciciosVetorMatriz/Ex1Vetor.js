const leia = require("readline-sync");

//Declarando as variáveis
const array = [2, 9, 7, 6, 4, 1, 3, 8, 6, 5, 10];

const num = leia.questionInt("\nDigite o numero que deseja encontrar: ");

for(let i = 0; i <= array.length; i++){
    if(array[i] === num){
        console.log("\nO numero esta localizado na posicao: " + i);
    }else if(i === array.length){
        console.log("\nO numero nao foi localizado");
    }//fim do if
}//fim do for







//Declarando as variáveis
let salarioBruto = 2000;
let adicionalNoturno = 500;
let horasExtras = 100;
let descontos = 200;
let salarioLiquido;

//Informando os valores das variáveis
console.log(" O salário bruto é: " + salarioBruto);
console.log(" O adicional noturno é: " + adicionalNoturno);
console.log(" O valor das horas extras é: " + horasExtras);
console.log(" Os descontos são: " + descontos);

//Calculando o valor do salário liquido
salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras*5)-descontos)

//Informando ao usuário o valor do salário liquido
console.log("O valor do salário liquido é:" + (salarioBruto + adicionalNoturno + (horasExtras*5)-descontos));


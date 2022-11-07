// 2. Faça um algoritmo que leia 2 números inteiros e faça sua adição. Se o resultado for maior
// ou igual a 10, some 5 a este número. Caso contrário some 7 a ele. Imprima o resultado
// final.

//Para se criar variaveis em JS deve ser usar as instruções <let> ou <var>

//(RECOMENDADO) let : criamos uma variavel que so existe dentro do bloco em que foi declarado.
//var : criamos uma variavel global que pode ser vista em qualquer ponto do script

//Declarando variaveis
let num1 = 3,
    num2 = 2;

//fazendo a adição dos numeros
num1 += num2;
//verificando o resultado
num1 >= 10 ? (num1 += 5) : (num1 += 7);
//imprimindo o resultado final
console.log("O resultado da soma e: "+num1);
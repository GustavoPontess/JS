//1. Dado dois números imprimir somente o maior deles

//Para se criar variaveis em JS deve ser usar as instruções <let> ou <var>
//(RECOMENDADO) let : criamos uma variavel que so existe dentro do bloco em que foi declarado.
//var : criamos uma variavel global que pode ser vista em qualquer ponto do script

//Declarando variaveis
let num1 = 10,
    num2 = 5;
//Imprimindo no console parte da mensagem
console.log("O maior numer e: ");
//Usando uma estrutura condicional para definir qual o maior numero e imprimilo
num1 > num2 ? console.log(num1) : console.log(num2);

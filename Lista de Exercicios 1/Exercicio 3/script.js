// 3. Faça um programa para ler os coeficientes de uma equação do primeiro grau (ax + b = 0),
// calcular e escrever a raiz da equação.

//Para se criar variaveis em JS deve ser usar as instruções <let> ou <var>
//(RECOMENDADO) let : criamos uma variavel que so existe dentro do bloco em que foi declarado.
//var : criamos uma variavel global que pode ser vista em qualquer ponto do script

//Mensagem para o usuario
console.clear();
console.log("Scripit para calcular a raiz de uma equação de primeiro grau.");

//Declarando e setando valor as variaveis
let cocienteA = 2, cocienteB = 4, cocienteC = 8, resultado;

//verificando se o cociente A e diferente de zero
if(cocienteA==0){
    console.log("O valor do coeficiente A deve ser diferente de zero.")
    return;
}

//Imprimindo no console a equação
console.log("A equação a ser qualculada e: " + cocienteA + "x" + " + " + cocienteB + " = " + cocienteC);

//calculando o resultado da equação
resultado = Math.sqrt(((cocienteC - cocienteB)/cocienteA));

//Imprimindo resultado
console.log("A raiz da equação de primeiro grau e: "+resultado);
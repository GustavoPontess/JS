// 4. Faça um algoritmo que leia o ano de nascimento de uma pessoa e calcule sua idade,
// considerando o ano atual. Para verificar se já fez aniversário no ano atual pergunte se a
// pessoa já fez aniversário, sendo que ela pode entrar com a informação "S"(sim) ou "N"
// (não). Com isto é possível se ter maior precisão sobre a idade. Verifique também se a
// pessoa já tem idade para conseguir Carteira de Habilitação (18 anos ou mais) e imprima a
// mensagem referente a esta checagem. Imprima a idade da pessoa

//Para se criar variaveis em JS deve ser usar as instruções <let> ou <var> 
//(RECOMENDADO) let : criamos uma variavel que so existe dentro do bloco em que foi declarado.
//var : criamos uma variavel global que pode ser vista em qualquer ponto do script

//Declarando variaveis e setando valores
let ano = 2000;
let anoAtual = new Date().getFullYear();
//


console.log(anoAtual);
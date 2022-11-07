let frutas = ["Laranja", "Maçã", "Banana"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

let numeros = [1, 4, 2, 6, 3, 7, 5, 8];
console.log(numeros);

let misturando = ['José', 35, true];
console.log(misturando);

//Inserções
frutas[2] = "Limão";
console.log(frutas);
frutas[3] = 'Pêra';
console.log(frutas);
console.log(frutas.length);

frutas[6] = 'Abacaxi';
console.log(frutas);
console.log(frutas.length);
console.log(frutas[4]);

frutas = []; // frutas = new Arrey();
frutas[frutas.length] = 'Melão';
console.log(frutas);
frutas[frutas.length] = 'Melancia';
console.log(frutas);
frutas[frutas.length] = 'Morango';
frutas[frutas.length] = 'Uva';

for(let i=0; i<frutas.length;i++) console.log(i, frutas[i]);

//metodo sort ordena o vetor
frutas.sort();
console.log(frutas);
//literal de objeto
let pessoa = { nome: "João", idade: 35, casado: true };
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]);

let prop = "nome";
console.log(pessoa[prop]);

pessoa.numeroDeFilhos = 2;
console.log(pessoa);

let pessoa1 = {};
pessoa1.nome = "Maria";
pessoa1.idade = 28;
pessoa1.casado = false;
pessoa1.numeroDeFilhos = 0;

function criaPessoa(n, i, c, f) {
  let p = {};
  p.nome = n;
  p.idade = i;
  p.casado = c;
  p.numeroDeFilhos = f;
  return p;
}

let pessoa2 = criaPessoa("João", 35, true, 2);
let pessoa3 = criaPessoa("Maria", 28, false, 0);
console.log("2°", pessoa2);
console.log("3°", pessoa3);


function Pessoa(n, i, c, f){
    this.nome = n;
    this.idade = i;
    this.casado = c;
    this.numeroDeFilhos = f;
    this.maiorDeIdade = function(){return this.idade>=18;}
}

let pessoa4 = new Pessoa('João', 35, true, 2);
console.log('4°', pessoa4);



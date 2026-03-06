const MinhaPilha = require('./pilha.js');

//exemplo de uso
const minha_variavel = new MinhaPilha();

minha_variavel.adicionar("a");
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);

//saida: 30 (Elemento no topo)
console.log(minha_variavel.topo());

//saida: 30 (remove o elemento do topo)
console.log(minha_variavel.remover());

//saida: 20 (agora o topo é 20)
console.log(minha_variavel.topo());

//saida:2 (dois elementos restantes)
console.log(minha_variavel.tamanhoPilha());
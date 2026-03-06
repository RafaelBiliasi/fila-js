const MinhaFila = require('./fila.js');

//exemplo de uso
const minha_variavel = new MinhaFila();

minha_variavel.enqueue("Cliente 1");
minha_variavel.enqueue("Cliente 2");
minha_variavel.enqueue("Cliente 3");

//saida: cliente 1
console.log(minha_variavel.front());

//saida: cliente 1
console.log(minha_variavel.dequeue());

//saida: cliente 2
console.log(minha_variavel.dequeue());

minha_variavel.enqueue("Cliente 4");

//saida: 2 (cliente 3 e cliente 4 ainda estão na fila)
console.log(minha_variavel.tamanhoPilha());
//saida: cliente 3
console.log(minha_variavel.front());
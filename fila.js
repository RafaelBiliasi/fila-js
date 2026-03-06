class MinhaFila {


    //lista e armazena os itens
    #items = [];
   //representa o indice do inicio da fila
    #inicio = 0;
   // represemta o índice do fim da fila
    #fim = 0;

    //adiciona um elemento ao final da fila
    enqueue(elemento) {

        //coloca o elemento no fim da fila
        this.#items[this.#fim] = elemento;

        //incrementa o indice do fim da fila
        this.#fim++;
     }
    
     //remove e retorna o primeiro elemento da fila (dequeue)
    dequeue() { 
        
        //se a fila estiver vazia, retorna undefined
        if(this.estaVazia()) {
            return undefined;
        }

        //Pega o item do inicio da fila
        const item = this.#items[this.#inicio];

        //remove o item do inicio da fila
        delete this.#items[this.#inicio];

        //move o indice do inico da fila para o proximo item
        this.#inicio++;

        //quando o inicio e o fim forem o mesmo valor, redefine a fila
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        //retorna o item removido
        return item;
    }

    // Retorna o elemento da fila sem removê-lo
    front() { 

        //se a fila estiver vazia, retorna undefined
        if(this.estaVazia()) {
            return undefined;
        }

        //retorna o item no topo
        return this.#items[this.#inicio];
    }

    // limpa a fila
    limpar() { 
         this.#inicio = {};
         this.#inicio = 0;
         this.#fim = 0;
    }
    //verifica se a pilha esta vazia
    //verifica se o tamanho da pilha é zero
    estaVazia = () => this.#fim === this.#inicio;

    //retorna o número de elementos na pilha
    tamanhoPilha = () => this.#fim - this.#inicio; 
}

module.exports = MinhaFila;
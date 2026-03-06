class MinhaPilha {


    //Uma lista para armazenar os elementos da pilha
    #items = [];
    //Mantemos o tamanho da pilha
    #tamanho = 0;

    //adiciona um elemento ao topo da pilha
    adicionar(elemento) {

        //insere um elemento na posição atual do tamanho
        this.#items[this.#tamanho] = elemento;

        //Incrementa o tamanho
        this.#tamanho++;
     }
    
     //remove e retorna o elemento do topo da pilha
    remover() { 
        
        //se a pilha estiver vazia, retorna undefined
        if(this.#tamanho === 0) {
            return undefined;
        }

        //Pega o item do topo da pilha
        const ultimoItem = this.#items[this.#tamanho - 1];

        //decrementa um tamanho da pilha
        this.#tamanho--;

        //retorna o item removido
        return ultimoItem;
    }

    // Retorna o elemento no topo da pilha sem removê-lo
    topo() { 

        //se a pilha estivar vazia retorna undefined
        if (this.#tamanho === 0 ) {
            return undefined;
        }

        //retorna o item no topo
        return this.#items[this.#tamanho - 1];
    }

    // limpa a pilha
    limpar() { 
        //reseta os itens
        this.#items = [];

        //reinicializa o tamanho
        this.#tamanho = 0;
    }
    //verifica se a pilha esta vazia
    //verifica se o tamanho da pilha é zero
    estaVazia = () => this.#tamanho === 0;

    //retorna o número de elementos na pilha
    tamanhoPilha = () => this.#tamanho; 
}

module.exports = MinhaPilha;
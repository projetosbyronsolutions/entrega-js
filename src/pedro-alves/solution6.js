function acharMaior(lista) {

    let posicaoMaiorValor = 0;
    let maiorValorLista = lista[0];



    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maiorValor) {
            maiorValorLista = lista[i];
            posicaoMaiorValor = i;
        }
    }

    return [maiorValorLista, posicaoMaiorValor];
}

module.exports = acharMaior;

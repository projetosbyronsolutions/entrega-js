function acharMaior(lista){
    let maior = lista[0];
    let i;
    let posicao = 0;
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]; 
            posicao = i
        }
    }
    return [maior, posicao];
}

module.exports = acharMaior;
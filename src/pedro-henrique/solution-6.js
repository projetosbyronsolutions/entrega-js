
function acharMaior(lista){
    let maiorv = lista[0];
    let posicao=0
    let i
    
    for (i=0;i<lista.length;i++) {
        if (lista[i] > maiorv) {
            maiorv = lista[i]; 
            posicao = i
        }
    }
    return [maiorv,posicao];
}

module.exports = acharMaior;
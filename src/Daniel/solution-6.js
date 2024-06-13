function acharMaior(lista) {
    if (lista.length === 0) {
        return []
    }

    let maiorValor = lista[0]
    let posicao = 0

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maiorValor) {
            maiorValor = lista[i]
            posicao = i
        }
    }

    return [maiorValor, posicao]
}
console.log(acharMaior)
module.exports(acharMaior)
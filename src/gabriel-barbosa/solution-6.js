function acharMaior(lista){
    let maior = lista[0]

    for(let i = 1; i < lista.length; i++){
        if(maior < lista[i]){
            maior = lista[i]
        }
    }

    let posicao = lista.indexOf(maior)

    let numMaior = [maior, posicao]

    return numMaior
}

list = [5, 2, 3, 9, 7, 1, 6]

console.log(acharMaior(list))

module.exports = acharMaior
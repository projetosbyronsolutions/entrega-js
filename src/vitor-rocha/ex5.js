function ordenarValores(a, b, c){
    vetor = [a, b, c]
    t = vetor.length

    for(i = 0; i < t - 1; i++){
        for(j = 0; j < t - 1 - i; j++){
            if(vetor[j] > vetor[j + 1]){
                let x = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = x
            }
        }
    }
    return console.log(vetor)
}

module.exports = ordenarValores;
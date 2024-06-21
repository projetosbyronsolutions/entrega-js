function acharSequencia(num){
    if(num == 0){
        return console.log([0])
    }

    if(num == 1){
        return console.log([0]);
    }

    if(num == 2){
        return console.log([0, 1]);
    }

    let lista = [0, 1];
    
    for(i = 2; i < num; i++){
        valor = lista[i - 1] + lista[i - 2]
        lista.push(valor)
    }
    return console.log(lista)
}

module.exports = acharSequencia;
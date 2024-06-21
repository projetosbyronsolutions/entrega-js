function acharMaior(lista){
    let maior = 0;
    let indice = 0;

    for(i = 0; i < lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i];
            indice = i;
        }
    }
    return console.log([maior, indice]);
}

let lista = []

module.exports = acharMaior;
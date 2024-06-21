lista = [2, 'asdf', [], true]

function qtdTruthy(lista) {
    cont = 0
    for (i = 0; i < lista.length; i++){
        if(lista[i] == true){
            cont++
        }
    }
    console.log(cont)
}

module.exports = qtdTruthy
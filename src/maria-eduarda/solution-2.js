function qtdTruthy(lista) {
    let cont = 0;
    for (i = 0; i < lista.length; i++){
        if (lista[i]) {
            cont++;
        }
    }
    return cont;
}
module.exports = qtdTruthy;

function qtdTruthy(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]) {
            countador++;
        }
    }
    return contador;
}

module.exports = qtdTruthy;


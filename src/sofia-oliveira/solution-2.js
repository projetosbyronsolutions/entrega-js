function qtdTruthy(lista) {
    let contador = 0;
    for (let item of lista) {
        if (item) {
            contador++;
        }
    }
    return contador;
}

module.exports = qtdTruthy;
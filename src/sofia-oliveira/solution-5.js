function ordenarValores(a, b, c) {
    let ordenados = [a, b, c].sort((x, y) => x - y);
    return ordenados
}


module.exports = ordenarValores;
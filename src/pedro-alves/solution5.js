function ordenarValores(a, b, c) {
    let valoresordenados = [a, b, c];

    valoresordenados.sort((x, y) => x - y);

    return valoresordenados;
}

module.exports = ordenarValores;

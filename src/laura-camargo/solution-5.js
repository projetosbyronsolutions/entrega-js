function ordenarValores(a, b, c) {
  let valores = [a, b, c];

  valores.sort((x, y) => x - y);

  return valores;
}

module.exports = ordenarValores;

function qtdTruthy(lista) {
  let count = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i]) {
      count++;
    }
  }
  return count;
}

module.exports = qtdTruthy;

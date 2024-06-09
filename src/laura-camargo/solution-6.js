function acharMaior(lista) {
  let maiorValor = lista[0];
  let posicaoMaiorValor = 0;

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maiorValor) {
      maiorValor = lista[i];
      posicaoMaiorValor = i;
    }
  }

  return [maiorValor, posicaoMaiorValor];
}

module.exports = acharMaior;

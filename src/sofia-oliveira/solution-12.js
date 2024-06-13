function separarCPF(cpf) {
    const partes = cpf.split(/[.-]/);
    const numeros = partes.map((part) => parseInt(part.trim(), 10));
    return numeros;
  }

  module.exports = separarCPF;
function podeSerContratado(altura, sexo) {
  if (sexo === "m" && altura >= 1.75) {
    return "sim";
  } else if (sexo === "f" && altura >= 1.8) {
    return "sim";
  } else {
    return "nao";
  }
}

// Testando a função
console.log(podeSerContratado(1.76, "m")); // Output: "sim"
console.log(podeSerContratado(1.74, "m")); // Output: "nao"
console.log(podeSerContratado(1.81, "f")); // Output: "sim"
console.log(podeSerContratado(1.79, "f")); // Output: "nao"

module.exports = podeSerContratado;

function calcularRaizes(A, B, C) {
  if (A === 0) {
    return "Impossivel calcular";
  }

  const delta = B * B - 4 * A * C;

  if (delta < 0) {
    return "Impossivel calcular";
  }

  const sqrtDelta = Math.sqrt(delta);
  const R1 = (-B + sqrtDelta) / (2 * A);
  const R2 = (-B - sqrtDelta) / (2 * A);

  const formattedR1 = R1.toFixed(5);
  const formattedR2 = R2.toFixed(5);

  return [parseFloat(formattedR1), parseFloat(formattedR2)];
}

module.exports = calcularRaizes;

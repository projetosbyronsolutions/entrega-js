function calcularRaizes(A, B, C) {
    if (A === 0) {
        return "Impossivel calcular"; // Não da pra dividir por 0
    }

    const delta = B * B - 4 * A * C;

    if (delta < 0) {
        return "Impossivel calcular"; // 
    }

    const R1 = (-B + Math.sqrt(delta)) / (2 * A);
    const R2 = (-B - Math.sqrt(delta)) / (2 * A);

    return [R1.toFixed(5), R2.toFixed(5)];
}


module.exports = calcularRaizes;
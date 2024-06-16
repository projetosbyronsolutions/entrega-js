function calcularRaizes(A, B, C) {
    if (A === 0) {
        return "Impossivel calcular";
    }
    
    let delta = (B * B) - (4 * A * C);

    if (delta > 0) {
        let x1 = (-B + Math.sqrt(delta)) / (2 * A);
        let x2 = (-B - Math.sqrt(delta)) / (2 * A);
        return [parseFloat(x1.toFixed(5)), parseFloat(x2.toFixed(5))];
    } else {
        return "Impossivel calcular";
    }
}

module.exports = calcularRaizes;

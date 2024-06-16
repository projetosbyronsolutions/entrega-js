function calcularRaizes(A, B, C) {
    let delta = 0;
    let R1, R2;
    
    if (A == 0) {
        return "Impossivel calcular";
    }
    
    delta = ((B * B) - (4 * A * C));
    
    if (delta < 0) {
        return "Impossivel calcular";
    }
    
    R1 = (-B + Math.sqrt(delta)) / (2 * A);
    R2 = (-B - Math.sqrt(delta)) / (2 * A);
    
    R1 = parseFloat(R1.toFixed(5)); 
    R2 = parseFloat(R2.toFixed(5));
    
    return [R1, R2]
}

module.exports = calcularRaizes;

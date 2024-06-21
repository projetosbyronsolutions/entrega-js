function calcularRaizes(A, B, C){
    if(A == 0){
        return console.log("Impossivel calcular")
    }

    let delta = (B * B) - (4 * A * C);

    if(delta < 0){
        return console.log("Impossivel calcular")
    }

    let raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    let raiz2 = (-B - Math.sqrt(delta)) / (2 * A);

    return console.log([raiz1.toFixed(5), raiz2.toFixed(5)]);
}

module.exports = calcularRaizes;

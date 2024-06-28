function calcularRaizes(A, B, C){
    if(A === 0){
        return "Impossivel calcular"
    }

    let delta = B ** 2 - 4 * A * C

    if(delta >= 0){
        let r1 = (-B - Math.sqrt(delta)) / (2 * A)
        let R1 = r1.toFixed(5)

        let r2 = (-B + Math.sqrt(delta)) / (2 * A)
        let R2 = r2.toFixed(5)

        let raizes = [R2, R1]

        return raizes
    }
    else{
        return "Impossivel calcular"
    }
}

console.log(calcularRaizes(10, 20.1, 5.1))

module.exports = calcularRaizes
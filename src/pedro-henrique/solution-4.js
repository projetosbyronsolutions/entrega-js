function calcularRaizes(A, B, C){
     
    let delta = (B*B) - (4*A*C)    

    if ((A===0) || (delta<0)) {
        return "Impossivel calcular"
    }
    else {       
        let R1 = (B*-1 + Math.sqrt(delta))/ (A*2)
        let R2 = (B*-1 - Math.sqrt(delta))/ (A*2)
        return [parseFloat(R1.toFixed(5)), parseFloat(R2.toFixed(5))]
    }

}

    console.log (calcularRaizes(20,25,0))
    module.exports = calcularRaizes
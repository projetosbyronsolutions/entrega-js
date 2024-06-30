function calcularRaizes (A,B,C){
    let delta;
    let x1,x2;

    delta = B*B -4*A*C;
    if(delta < 0 || A == 0) 
    {
        return "Impossivel calcular";
    }
    else
    {
        x1 = (-B + Math.sqrt(delta)) / (2*A);
        x2 = (-B - Math.sqrt(delta)) / (2*A);
    }

    return [x1.toFixed(5), x2.toFixed(5)];

}

module.exports = calcularRaizes;

//console.log(calcularRaizes(10.0, 20.1, 5.1));
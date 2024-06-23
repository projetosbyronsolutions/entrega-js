let DivideXY = (numero1, numero2) => {
    if (numero2 == 0)
    {
        return "divisao impossivel"
    }
    return numero1 / parseFloat(numero2.toFixed(2));
}

console.log(DivideXY);

module.exports = DivideXY;
function DivideXY(numero1, numero2) {
    if (numero2 === 0) {
        return "divisao impossivel"
    }

    let resultado = numero1 / numero2

    return resultado
}
console.log(DivideXY)

module.exports=DivideXY
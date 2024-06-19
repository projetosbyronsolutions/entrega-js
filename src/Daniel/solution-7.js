function DivideXY(numero1, numero2) {
    if (numero2 === 0) {
        return "divisao impossivel"
    }else{

    let resultado = numero1 / numero2

    return resultado;
    }

}
module.exports=DivideXY;
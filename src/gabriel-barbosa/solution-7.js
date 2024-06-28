function DivideXY(numero1, numero2){
    if(numero2 === 0){
        return "divisao impossivel"
    }
    else{
        let divisao = numero1 / numero2

        return divisao
    }
}

console.log(DivideXY(5, 2))

module.exports = DivideXY
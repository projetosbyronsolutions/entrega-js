function DivideXY(numero1, numero2){

    if(numero2 === 0){
        return "divisao impossivel"
    }
    else{
        let divisao = numero1 / numero2;
        return divisao
    }
    
}

module.exports = DivideXY;
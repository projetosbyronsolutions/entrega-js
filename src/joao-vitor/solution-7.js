function DivideXY (numero1,numero2){
    if(numero2==0)
    {
        return "divisao impossivel";
    }

    let divisao = numero1/numero2;
    
    return divisao;

}

module.exports = DivideXY;

//console.log(DivideXY(30,45));
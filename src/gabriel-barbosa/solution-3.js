function podeContratar(altura,sexo){
    if(sexo == "m"){
        if(altura >= 1.75){
            return "sim"
        }
        else{
            return "nao"
        }
    }
    else if(sexo == "f"){
        if(altura >= 1.80){
            return "sim"
        }
        else{
            return "nao"
        }
    }
}

console.log(podeContratar(1.83, "f"))

module.exports = podeContratar
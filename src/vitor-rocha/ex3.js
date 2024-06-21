function podeContratar(altura, sexo){
    if(sexo == 'm' && altura >= 1.75){
        console.log("sim")
    }else if(sexo == 'f' && altura >= 1.8){
        console.log("sim")
    }else{
        console.log("nao")
    }
}

module.exports = podeContratar

// Acho que a saida do enunnciado esta incorreta
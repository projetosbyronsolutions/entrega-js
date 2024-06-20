function ordenarValores(a, b, c){

    let valor=[a,b,c]


    
    
    valor.sort((a, b) => a - b)
    
    return valor;
}



module.exports=ordenarValores
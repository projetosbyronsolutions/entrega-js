function ordenarValores(a, b, c){

    let valorAntigo=[a,b,c]


    let valoresOrdenados = [valorAntigo]
    
    valoresOrdenados.sort((a, b) => a - b)
    
    valoresOrdenados.forEach(valor => console.log(valor))
    
    console.log("")

    valorAntigo.forEach(valor => console.log(valor))
}
console.log(ordenarValores)


module.exports=ordenarValores
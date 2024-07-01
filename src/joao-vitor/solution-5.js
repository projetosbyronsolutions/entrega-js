function ordenarValores(a,b,c){
    let lista = [a,b,c].sort((a,b)=> a-b);

    return lista;
}

module.exports = ordenarValores;
//console.log(ordenarValores(0, -3, 1));
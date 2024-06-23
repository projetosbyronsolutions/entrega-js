function qtdTruthy(lista){
    let listaTrue = lista.filter((Element) => {
        return Element
    })

    return listaTrue.length
}

list = [57, NaN, "Hello World", 0, [], "", undefined]

console.log(qtdTruthy(list))

module.exports = qtdTruthy
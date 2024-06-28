function ordenarValores(a, b, c){
    let array = [a, b, c]

    array.sort((a, b) => {
        return a - b
    })

    return array
}

console.log(ordenarValores(7, 2, -6))

module.exports = ordenarValores
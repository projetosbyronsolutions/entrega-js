function acharMaior(lista) {
    let x = 0;
    let y = 1;
    let array = [];
    array[0] = 0;
    for (let i = 2; i < lista; i++){
        array[1] = 1;
        let fibonacci = x + y;
        x = y;
        y = fibonacci;
        array[i] = fibonacci;
    }
    return array;
}

module.exports = acharMaior;

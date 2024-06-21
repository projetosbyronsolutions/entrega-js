function separarCPF(str) {
    let lista = [];
    let parte = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '.' || str[i] == '-') {
            lista.push(parseInt(parte));
            parte = '';
        } else {
            parte += str[i];
        }
    }
    lista.push(parseInt(parte));

    return console.log(lista);
}

module.exports = separarCPF
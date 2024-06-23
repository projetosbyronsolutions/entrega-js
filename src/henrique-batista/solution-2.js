let qtdTruthy = (lista) => {
    let count = 0;
    for (i = 0; i < lista.length; i++){
        if (lista[i]) {
            count++;
        }
    }
    return count;
}
console.log(qtdTruthy);
module.exports = qtdTruthy;